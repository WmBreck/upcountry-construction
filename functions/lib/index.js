"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectAssistant = void 0;
const functions = require("firebase-functions");
const cors = require("cors");
const corsHandler = cors({ origin: true });
exports.projectAssistant = functions.https.onRequest((req, res) => {
    corsHandler(req, res, async () => {
        var _a, _b, _c;
        // Only allow POST requests
        if (req.method !== 'POST') {
            res.status(405).json({ error: 'Method not allowed' });
            return;
        }
        try {
            const { userInput, serviceType } = req.body;
            // Validate input
            if (!userInput || userInput.trim().length === 0) {
                res.status(400).json({ error: 'User input is required' });
                return;
            }
            // Get OpenAI API key from Firebase config
            const openaiApiKey = (_a = functions.config().openai) === null || _a === void 0 ? void 0 : _a.key;
            if (!openaiApiKey) {
                res.status(500).json({ error: 'OpenAI API key not configured' });
                return;
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

Keep responses helpful, professional, and focused on construction/remodeling projects. Ask clarifying questions to help customers provide complete project details.`;
            // Prepare the OpenAI API request
            const openaiRequest = {
                model: "gpt-4",
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: `Service Type: ${serviceType || 'General'}\n\nProject Details: ${userInput}` }
                ],
                max_tokens: 500,
                temperature: 0.7
            };
            // Make the API call to OpenAI
            const fetch = (await Promise.resolve().then(() => require('node-fetch'))).default;
            const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${openaiApiKey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(openaiRequest),
            });
            if (!openaiResponse.ok) {
                const errorData = await openaiResponse.json();
                console.error("OpenAI API error:", errorData);
                res.status(500).json({ error: "Failed to get AI assistance" });
                return;
            }
            const openaiData = await openaiResponse.json();
            const aiResponse = (_c = (_b = openaiData.choices[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content;
            if (!aiResponse) {
                res.status(500).json({ error: "No response from AI assistant" });
                return;
            }
            res.json({
                suggestion: aiResponse,
                success: true
            });
        }
        catch (error) {
            console.error("Project assistant error:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
});
//# sourceMappingURL=index.js.map