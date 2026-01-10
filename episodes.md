---
layout: default
title: Episodes
permalink: /episodes/
---

<section class="hero">
  <h1>Episodes</h1>
  <p class="hero-statement" id="rotating-text">
    Honest conversations for men striving to grow as leaders under God.
  </p>
  <p class="tagline">
    Practical wisdom, faith, and leadership advice for Christian men striving to grow under God.
  </p>
</section>

<section class="section episodes-grid">
  <h2>Latest Episodes</h2>

  {% assign sorted_episodes = site.posts | sort: "date" | reverse %}

  {% for episode in sorted_episodes %}
    {% if episode.layout == "episode" and episode.publish %}
      <article class="card episode-card">

        <h3>{{ episode.title }}</h3>
        <p class="date">{{ episode.date | date: "%B %d, %Y" }}</p>
        <p>{{ episode.summary }}</p>

        {% if episode.audio %}
          <audio controls>
            <source src="{{ episode.audio | relative_url }}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        {% elsif episode.video %}
          <div class="video-container">
            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed/{{ episode.video }}"
              title="{{ episode.title }}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        {% endif %}

        <p><a href="{{ episode.url | relative_url }}">Read / Watch →</a></p>
      </article>
    {% endif %}
  {% endfor %}

  {% if sorted_episodes == empty %}
    <p>No episodes have been posted yet. Check back soon!</p>
  {% endif %}
</section>
