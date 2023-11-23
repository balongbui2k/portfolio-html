const handleCopy = async (id) => {
    const copyContent = document.getElementById(id).innerHTML;
       await navigator.clipboard.writeText(copyContent);
       try {
    alert('Content copied to clipboard!')
       } catch (error) {
    alert('Failed to copy content!',error)
        
       }
  }


