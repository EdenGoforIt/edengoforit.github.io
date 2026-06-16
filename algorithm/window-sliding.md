---
title: Sliding Window
description: Notes about the sliding window algorithm pattern.
---

# Sliding Window

Sliding window is useful when a problem asks about a continuous section of an array or string.

## When To Use It

- Find the longest substring that matches a rule.
- Find the minimum window containing required values.
- Calculate sums or counts over a moving range.
- Avoid recalculating the same range repeatedly.

## Basic Idea

Use two pointers, usually `left` and `right`.

```python
left = 0

for right in range(len(items)):
    # expand the window with items[right]

    while window_is_invalid:
        # shrink the window from the left
        left += 1
```

## Common Examples

- Longest substring without repeating characters.
- Minimum window substring.
- Maximum sum subarray of size `k`.
- Count subarrays that satisfy a condition.

## Original Source

- [Snippet-Markup Algorithm/window-sliding.md](https://github.com/EdenGoforIt/Snippet-Markup/blob/main/Algorithm/window-sliding.md)
