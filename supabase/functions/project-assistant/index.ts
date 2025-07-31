import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { userInput, serviceType } = await req.json()

    // Validate input
    if (!userInput || userInput.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'User input is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Get OpenAI API key from environment
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openaiApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Create system prompt tailored for Upcountry Contractors
    const systemPrompt = `You are a Project Description Builder for Upcountry Contractors, a construction and remodeling company serving Greenville, Spartanburg, and surrounding South Carolina communities. 

Your role is to help homeowners clearly describe their construction and remodeling projects. Based on their input, provide:

1. A well-structured project description
2. Important details they should consider
3. Questions that help clarify scope and requirements
4. Realistic timeline and budget considerations for the upcountry SC market

Services we offer:
- Kitchen Remodeling (custom cabinets, countertops, appliances)
- Bathroom Renovation (luxury fixtures, tile work, walk-in showers)
- Home Additions (room additions, second stories, sunrooms)
- Outdoor Living (decks, patios, outdoor kitchens, fire features)
- Whole Home Renovation (complete transformations)
- Home Repairs (plumbing, electrical, drywall, emergency service)

Keep responses helpful, professional, and focused on construction/remodeling projects. Ask clarifying questions to help customers provide complete project details.

Format your response in a clear, organized way that helps the customer understand their project better.`

    // Prepare the OpenAI API request
    const openaiRequest = {
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Service Type: ${serviceType || 'General'}\n\nProject Details: ${userInput}` }
      ],
      max_tokens: 500,
      temperature: 0.7
    }

    // Make the API call to OpenAI
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openaiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(openaiRequest),
    })

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json()
      console.error("OpenAI API error:", errorData)
      return new Response(
        JSON.stringify({ error: "Failed to get AI assistance" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const openaiData = await openaiResponse.json()
    const aiResponse = openaiData.choices[0]?.message?.content

    if (!aiResponse) {
      return new Response(
        JSON.stringify({ error: "No response from AI assistant" }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    return new Response(
      JSON.stringify({ 
        suggestion: aiResponse,
        success: true 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error("Project assistant error:", error)
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})