from transformers import pipeline

# Load a pre-trained conversational chatbot model
chatbot = pipeline("conversational")


def get_response(input_text):
    return chatbot(input_text)[0]["generated_text"]
