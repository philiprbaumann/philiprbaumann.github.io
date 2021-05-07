---
layout: code
title:  Ruby Benchmarking
date: 2021-03-25
---

Over a year ago, my team and I set out to develop a new version of our application; a distributed set of Dockerized microservices to provide customers with a high availability and sleek web application for high speed data transfer. Throughout this process, I've learned quite a few lessons. I want to start sharing some of these lessons here to not only reflect on these lessons in the future, but share any tidbits I picked up for others.

Today, I want to talk about Ruby benchmarking. This stuff is so useful! And I honestly wish this was one of the first things I learned how to do in Ruby. So here's Ruby benchmarking in a few short lines. 

First, Ruby has a benchmarking library built into its **standard library**, which ya gotta love. No need to import some random library. You can start by throwing this on the top of the file you want to test:

```ruby

	require 'benchmark'

```

Easy as pie, right? Alright, now lets say we wanna test this snippet of code:

```ruby

	Array(1..100).map{ |num| num ** 2 }

```

Lets slap a **`Benchmark.measure`** around it:
```ruby

	Benchmark.measure {
		num_of_tests.times do {
			Array(1..100).map{ |num| num ** 2 }
		}
	}

```

This **`Benchmark.measure`** call will return four values in seconds:
1. The amount of time spent executing the code **that you wrote**: (**`Benchmark.measure.user`**)
2. The amount of time spent executing **kernel code**: (**`Benchmark.measure.system`**)
3. The sum of the two totals above, or the sum of the **kernel and the user process** execution time: (**`Benchmark.measure.total`**)
4. The is final number is what I spend the most of my time looking at which is the **elapsed real time**: (**`Benchmark.measure.real`**)

To print these values you could do:
```ruby

	puts Benchmark.measure {
		num_of_tests.times do {
			Array(1..100).map{ |num| num ** 2 }
		}
	}

```
or you could access a specific value with:
```ruby

	stats = Benchmark.measure {
		num_of_tests.times do {
			Array(1..100).map{ |num| num ** 2 }
		}
	}
	puts stats.real

```

This would output something like: **`87.810000`**. You can come up with all sorts of statistics on individual runs if you'd like given you have the **`num_of_tests`** and a few different measurements for total **`time`**. 

And that's a quick rundown on **`Ruby`**'s **`benchmark`** library! Efficient, easy, and a game changer for developers. I only wish I knew about it sooner! 

