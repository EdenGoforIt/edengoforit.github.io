# Overview

Large Language Models, or LLMs, are AI systems designed to understand and generate human language.

ChatGPT is powered by an LLM. The model is trained by reading huge amounts of text and learning patterns in language, such as grammar, facts, writing styles, and common relationships between ideas.

The basic idea is:

1. Text is split into small pieces called tokens.
2. Each token is converted into numbers the model can process.
3. The model studies the context.
4. The model predicts the most likely next token.
5. Repeating this prediction creates a full answer.

An LLM does not think exactly like a human. It generates responses by using patterns learned from data.

# Machine Learning

Machine learning is a way to teach computers by using examples instead of writing every rule by hand.

In traditional programming, humans write exact rules:

```text
If the user clicks this button, show this message.
```

In machine learning, the AI learns patterns from data:

```text
Here are many examples. Learn the pattern and make a prediction.
```

For LLMs, the main prediction task is usually:

```text
Given the previous tokens, what token should come next?
```

A Transformer is the machine learning architecture used by many modern LLMs. It helps the model understand relationships between tokens by using attention.

Attention lets the model decide which words or tokens are most important in the current context. For example, in the sentence "The dog chased the ball because it was excited," attention helps the model connect "it" with "dog."

# Deep Learning

Deep learning is a type of machine learning that uses neural networks with many layers.

Each layer transforms the information a little more. Early layers may learn simple patterns, while deeper layers can learn more abstract ideas.

For language, this means a deep learning model can learn things like:

- spelling patterns
- grammar
- sentence structure
- meaning
- relationships between concepts
- tone and style

In an LLM, deep learning helps the model turn text into useful internal patterns, then use those patterns to predict the next token.

# Neural Network

A neural network is a system made of connected layers that process numbers.

The simple flow looks like this:

```text
input -> layer -> layer -> layer -> output
```

Each layer receives numbers, transforms them, and passes the result to the next layer.

In an LLM:

1. Text becomes tokens.
2. Tokens become numbers.
3. Neural network layers process those numbers.
4. The final layer produces probabilities for the next token.

You can think of a neural network as a pattern-finding machine. It does not store every sentence it has seen. Instead, it learns useful patterns from many examples.

# Embedding

An embedding is a numerical representation of text.

Computers cannot directly understand words like humans do, so words and tokens are converted into numbers.

A token is a small piece of text. A token can be:

- a whole word
- part of a word
- punctuation
- a short character sequence

For example, a sentence might be split like this:

```text
"I love machine learning" -> ["I", "love", "machine", "learning"]
```

After tokenization, each token is mapped to numbers. These numbers are called embeddings.

Embeddings help the model understand similarity and meaning. For example, the embeddings for "king" and "queen" may be closer together than the embeddings for "king" and "banana" because "king" and "queen" are more related in meaning.

The basic flow is:

```text
text -> tokens -> token numbers -> embeddings -> neural network
```
