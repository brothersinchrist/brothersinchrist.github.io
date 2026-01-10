---
layout: default
title: "Blog"
permalink: /blog/
---

<section class="hero">
  <h1>Men of God Blog</h1>
  <p class="tagline">
    Honest conversations to inspire men to lead their families and communities.
  </p>
</section>

<section class="section blog-posts">
  {% assign posts = site.posts | sort: "date" | reverse %}
  {% for post in posts %}
    {% if post.layout == "blog-post" and post.publish %}
      <article class="card">
        {% if post.cover %}
          <img class="post-cover" src="{{ post.cover | relative_url }}" alt="{{ post.title }}">
        {% endif %}
        <h3>{{ post.title }}</h3>
        <p>{{ post.summary }}</p>
        <a href="{{ post.url | relative_url }}">Read more</a>
      </article>
    {% endif %}
  {% endfor %}
</section>
