import OpenAI from "openai";

const openai = new OpenAI({
    organization: 'org-PqpBf4tbzogSBqsM5jqzbrkN',
    apiKey: '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'
});
const completion = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: 'Say Hello To Mas Supri'
})
main();