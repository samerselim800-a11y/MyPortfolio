var header=document.getElementById("header")
var btn=document.getElementById("btn")
var backToTob=document.getElementById("backToTob")

document.addEventListener("scroll",function(){
    if (window.scrollY > 250 ) {
      header.classList.add("headerFixed")

      btn.classList.remove("hide")
       
    }
    else if(window.scrollY == 0){

        header.classList.remove("headerFixed")
      btn.classList.add("hide")


    }
     if((window.scrollY + window.innerHeight)+100  >= document.body.scrollHeight ){
        header.classList.remove("headerFixed")
    }
     else{
         header.classList.add("headerFixed")


     }
    

})
btn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"

    })
        
    
})
document.getElementById("ContactForm").addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const sendBtn = document.getElementById("sendBtn");
    
    // Disable button
    sendBtn.disabled = true;
    sendBtn.innerHTML = 'جاري الإرسال... <i class="ri-loader-4-line"></i>';
    
    const formData = new FormData(this);
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert("✅ تم إرسال رسالتك بنجاح!");
            this.reset();
        } else {
            alert("❌ حدث خطأ. يرجى المحاولة مرة أخرى.");
        }
    } catch (error) {
        alert("❌ فشل الاتصال بالخادم.");
    }
    
    // Re-enable button
    sendBtn.disabled = false;
    sendBtn.innerHTML = 'Send Me Message <i class="ri-mail-line"></i>';
});


