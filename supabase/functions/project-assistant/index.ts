const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    let requestBody;
    try {
      requestBody = await req.json();
    } catch (parseError) {
      console.error("JSON parsing error:", parseError);
      return new Response(
        JSON.stringify({ error: 'Invalid JSON in request body' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { userInput, serviceType, messages } = requestBody;

    // Validate input
    if ((!userInput || userInput.trim().length === 0) && (!messages || messages.length === 0)) {
      return new Response(
        JSON.stringify({ error: 'User input is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Generate AI-powered suggestions
    let inputText = userInput;
    if (!inputText && messages && messages.length > 0) {
      inputText = getLatestUserMessage(messages);
    }
    
    if (!inputText || inputText.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'No valid input found' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const aiResponse = await generateAIResponse(inputText, serviceType);

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
    console.error("Project assistant error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to get AI assistance" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})

function getLatestUserMessage(messages: any[]): string {
  if (!messages || messages.length === 0) return '';
  
  // Find the last user message
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === 'user') {
      return messages[i].content;
    }
  }
  return '';
}

async function generateAIResponse(userInput: string, serviceType?: string): Promise<string> {
  try {
    const openaiApiKey = Deno.env.get('OPENAI_API_KEY');
    
    if (!openaiApiKey) {
      console.error('OpenAI API key not found in environment variables');
      return getFallbackResponse(userInput, serviceType);
    }

    const systemPrompt = `You are a helpful assistant for Upcountry Contractors, a home improvement company serving the Greenville and Spartanburg areas in South Carolina. Provide detailed, professional advice for home improvement projects. Focus on practical considerations, timelines, and local factors.`;
    
    const userPrompt = serviceType 
      ? `Service Type: ${serviceType}\nUser Input: ${userInput}`
      : userInput;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error('OpenAI API error:', response.status, response.statusText);
      return getFallbackResponse(userInput, serviceType);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    } else {
      console.error('Unexpected OpenAI response format:', data);
      return getFallbackResponse(userInput, serviceType);
    }
    
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return getFallbackResponse(userInput, serviceType);
  }
}

function getFallbackResponse(userInput: string, serviceType?: string): string {
  const input = userInput.toLowerCase()
  
  // Kitchen remodeling suggestions
  if (input.includes('kitchen') || serviceType === 'Kitchen Remodeling') {
    return `**Kitchen Remodeling Project Analysis**

Based on your input, here are key considerations for your kitchen project:

**Project Scope Questions:**
- Are you planning a full renovation or partial update?
- Do you want to change the kitchen layout or keep existing footprint?
- What's your priority: functionality, aesthetics, or both?

**Important Details to Consider:**
- Cabinet style and material preferences
- Countertop material (granite, quartz, marble)
- Appliance package and energy efficiency needs
- Lighting plan (task, ambient, accent)
- Flooring coordination with rest of home

**Timeline & Budget Considerations:**
- Full kitchen remodel: 4-8 weeks
- Partial updates: 2-4 weeks
- Budget range varies significantly based on finishes and scope

**Next Steps:**
Please provide more details about your specific goals, budget range, and timeline preferences so we can create a more detailed project plan.`
  }
  
  // Bathroom renovation suggestions
  if (input.includes('bathroom') || serviceType === 'Bathroom Renovation') {
    return `**Bathroom Renovation Project Analysis**

Your bathroom project considerations:

**Key Questions:**
- Is this a master bath, guest bath, or powder room?
- Do you want to reconfigure the layout?
- Are you interested in accessibility features?

**Important Elements:**
- Shower/tub preferences (walk-in shower, soaking tub)
- Vanity size and storage needs
- Tile selections for floors and walls
- Lighting and ventilation requirements
- Plumbing fixture quality and style

**Timeline Expectations:**
- Full bathroom renovation: 2-4 weeks
- Partial updates: 1-2 weeks

**Considerations for Upstate SC:**
- Humidity control is important
- Consider resale value in local market

Let us know your specific vision and we'll help refine the project details.`
  }
  
  // Home addition suggestions
  if (input.includes('addition') || input.includes('add room') || serviceType === 'Home Additions') {
    return `**Home Addition Project Analysis**

For your home addition project:

**Planning Considerations:**
- What type of space are you adding? (bedroom, family room, office)
- Do you want the addition to match existing architecture?
- How will this connect to your current home layout?

**Important Factors:**
- Foundation requirements and site conditions
- Electrical and HVAC integration
- Permits and local building codes
- Roofline integration with existing structure

**Timeline & Process:**
- Design and permitting: 4-8 weeks
- Construction: 8-16 weeks depending on size
- Weather considerations for outdoor work

**Local Considerations:**
- Greenville/Spartanburg area building codes
- HOA requirements if applicable
- Utility access and connections

Please share more about the intended use and size of your addition for a more detailed assessment.`
  }
  
  // Outdoor living suggestions
  if (input.includes('deck') || input.includes('patio') || input.includes('outdoor') || serviceType === 'Outdoor Living') {
    return `**Outdoor Living Project Analysis**

For your outdoor living space:

**Design Questions:**
- What's the primary use? (entertaining, relaxation, dining)
- Do you want covered or open space?
- How does this connect to your indoor living areas?

**Material Considerations:**
- Decking material (composite, wood, stone)
- Railing style and height requirements
- Lighting for evening use
- Weather protection options

**Special Features:**
- Outdoor kitchen or grilling area
- Fire pit or fireplace
- Built-in seating or planters
- Pergola or shade structures

**Climate Considerations for Upstate SC:**
- Materials that handle humidity and temperature changes
- Drainage planning for heavy rains
- Seasonal use optimization

**Timeline:**
- Simple deck: 1-2 weeks
- Complex outdoor living space: 3-6 weeks

Tell us more about your vision and how you plan to use the space!`
  }
  
  // Home repair suggestions
  if (input.includes('repair') || input.includes('fix') || serviceType === 'Home Repair') {
    return `**Home Repair Project Analysis**

For your home repair needs:

**Common Repair Categories:**
- Plumbing issues (leaks, clogs, fixture replacement)
- Electrical problems (outlets, switches, lighting)
- HVAC maintenance and repairs
- Roofing and gutter issues
- Drywall and paint touch-ups
- Flooring repairs and replacement

**Assessment Questions:**
- Is this an emergency repair or planned maintenance?
- How long has the issue been present?
- Have you noticed any related problems?

**Safety Considerations:**
- Electrical and plumbing work may require permits
- Some repairs need immediate attention to prevent damage
- Professional assessment recommended for structural issues

**Timeline Expectations:**
- Emergency repairs: Same day to 48 hours
- Standard repairs: 1-3 days
- Complex repairs: 1-2 weeks

**Local Expertise:**
- Licensed professionals for electrical/plumbing
- Knowledge of local building codes
- Quality materials suited for SC climate

Please describe the specific repair issue so we can provide targeted guidance and timeline estimates.`
  }
  
  // General project suggestions
  return `**Project Planning Assistant**

Thank you for reaching out about your project. To provide the best guidance, we'd like to understand:

**Project Basics:**
- What type of project are you considering?
- What's driving this project? (functionality, aesthetics, damage repair)
- What's your ideal timeline?

**Our Specialties:**
- Kitchen Remodeling
- Bathroom Renovation  
- Home Additions
- Outdoor Living Spaces
- Home Repair
- Whole Home Renovation

**Next Steps:**
Please provide more details about your specific project goals, and we'll help you create a comprehensive project description that covers all the important considerations.

**Why Choose Upcountry Contractors:**
- Local expertise in Greenville & Spartanburg areas
- Quality craftsmanship and materials
- Transparent communication throughout the process
- Licensed and insured professionals

We're here to help bring your vision to life!`
}