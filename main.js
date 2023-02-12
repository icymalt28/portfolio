const navMenu=document.getElementById('nav-menu'),
      navSkill=document.getElementById('nav-skill')
  navToggle=document.getElementById('nav-toggle'),
  navClose=document.getElementById('nav-close')

  if(navToggle){
   navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
  }



  if(navToggle){
   navToggle.addEventListener('click',() =>{
        navSkill.classList.add('show-skill')
    })
  }

  if(navClose){
    navClose.addEventListener('click',() =>{
      navClose.classList.remove('show-menu')

    })
  }
  const navLink=document.querySelectorAll('.nav__link')
    function linkAction(){
      const navMenu=document.getElementById('nav-menu')
      navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click',linkAction))

    const skillsContent= document.getElementsByClassName('skills__content')
    skillsHeader=document.querySelectorAll('.skills__header')

    function toggleSkills(){
      let itemClass=this.parentNode.className

      for(i=0;i<skillsContent.length;i++){
      skillsContent[i].className='skills__content skills__close'
      }
      if(itemClass ==='skills__content skills__close'){
        this.parentNode.className='skills__content skills__open'
      }


    }
    skillsHeader.forEach((el) =>{
      el.addEventListener('click',toggleSkills)
    })


    
