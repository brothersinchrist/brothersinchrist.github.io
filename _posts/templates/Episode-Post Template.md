<%* 
// 1. Prompt for title if the file is Untitled
let title = tp.file.title.trim();
if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Enter the episode post title:");
}
title = title.trim(); // remove any extra spaces

// 2. Sanitize slug
let slug = title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');

// 3. Move the file to the correct folder with Jekyll-friendly filename
let date = tp.date.now("YYYY-MM-DD");
await tp.file.move(`_posts/episode/${date}-${slug}.md`);

// 4. Store title in temporary variable for frontmatter
tp.user.temp_title = title;

// 5. Remove any accidental leading whitespace or blank lines in frontmatter
tp.user.frontmatter_prefix = '---';
tp.user.frontmatter_suffix = '---';
%><% tp.user.frontmatter_prefix %>
title: <% tp.user.temp_title %>
date: <% tp.date.now("YYYY-MM-DD") %>
author:
cover: 
summary: 
video: 
layout: 
comments: true
publish: false
<% tp.user.frontmatter_suffix %>

