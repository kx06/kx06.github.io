---
title: "Starting My Codeforces Journey - CP 31 Sheet"
date: "2025-10-21"
draft: false
description: "First time doing codeforces!!! Solving first 2 questions of the CP-31 Sheet"
image: "/images/cp2.svg"
categories:
- DSA
---

### Background and Starting with Codeforces!

I've done a bit of Leetcode before and I wouldn't say I'm great at it but I kinda wanted to check out Codeforces cuz everyone talks a lot about it. This site seems to have a lot of questions so its prolly better to follow a sheet so that we gradually solve higher rated questions.
I have a decent understanding of most data structures and algorithms so I don't think ill be filtering out questions that use certain DS and Algos.

So yea, i picked CP-31 sheets, you can find the sheet on TLE Eliminators or **[Codolio](https://codolio.com/question-tracker/sheet/800-rated-cp-31-sheet?category=popular)**, I'm gonna start from 800 rating cuz thats the lowest from where you can start haha.

#### 1. Halloumi Boxes

First Q :)))

So the question itself seems fairly straightforward, we need to sort a bunch of boxes according to their labels, the sorting machine used reverses the subarrays of length k or smaller than that.

This is fairly straightforward as, when we think about reversing two elements, its the same as swapping them. Swapping two elements is very good in terms of freedom, i.e we can achieve any permutation. The same can't be said when we have subarrays of length 3. the middle element stays in the same place, we can think along the same lines when length becomes 4 and so on.

So all we have to do is write code for the cases when k = 1 and k = 2 or greater.
Pretty simple.

``` cpp
bool solve(int n, int k, vector<long long> vi) {
  if (n == 1 and k == 1) {
    return true;
  } else if (n > 1 and k == 1) {
    long long prev = vi[0];
    for (int i = 1; i < n; i++) {
      if (prev > vi[i]) {
        return false;
      }
      prev = vi[i];
    }
    return true;
  } else {
    return true;
  }
}
```

#### 2. Line Trip

We are pretty quickly on to the 2nd question. This seems even more straightforward haha, they give us a starting and ending point where we can't fill fuel but rest of the places we can fill fuel.
All we have to do is assume the max fuel we require is 0 at the start and keep checking and increasing as when required. Only thing we gotta keep in mind is that when we go from the last fuel station to the ending point, we need to come back, since there is no fuel station there, we need to 2x the distance/fuel required. Pretty chill all around.

``` cpp
void solve(int n, int x, vector<long long> stations) {
  long long prev = 0;
  long long mx = 0;
  for (int i = 0; i < n; i++) {
    mx = max(mx, stations[i] - prev);
    prev = stations[i];
  }
  mx = max(mx, 2 * (x - prev));
  cout << mx << "\n";
}
```

So, yea very good beginnings I suppose. I'll try and fit in more questions from the next post as we don't really need so much clutter for 800 rating haha. Onto Next.
