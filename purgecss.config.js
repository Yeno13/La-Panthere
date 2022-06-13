module.exports = {
    content: ['index.html'],
    css: ['style.css']
  }
  const purgecss = await new PurgeCSS().purge()

  await new PurgeCSS().purge({ 
    css: ['style.css']
})
