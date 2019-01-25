function convertHTML(str) {
    let conversions = 
      { 
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apos;'
      }
    return str.replace(/[&<>"'"]/g, (char) => conversions[char]);
  }
  
  convertHTML("Dolce & Gabbana");

// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.