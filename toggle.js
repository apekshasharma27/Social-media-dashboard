function Toggle()
{

  let doc = document.querySelectorAll('.dash-body--card');
  let oCards=document.querySelectorAll('.overview-card');
  if(document.querySelector('#darkMode').checked)
  {
    //for the social media dashboard
    document.querySelector('.background-style').setAttribute('style','background-color:   hsl(232, 19%, 15%);');
    document.documentElement.setAttribute('style','background-color:hsl(230, 17%, 14%); color:#fff;');
    for(let i =0;i<doc.length;i++)
    {
      let cName = doc[i].className;
      if(cName.includes("instagram"))
      {
        doc[i].setAttribute('style','background:linear-gradient(to right , hsl(228, 28%, 20%) , hsl(228, 28%, 20%)),linear-gradient(to right , #FDC468,#DF4996);'+
                                    'background-clip:padding-box , border-box;'+
                                    'background-origin:padding-box, border-box;');
      }
      else
      {
        doc[i].style.backgroundColor='hsl(228, 28%, 20%)';
      }

    }
    //for the overiview cards in the bottom

    for(let j=0;j<oCards.length;j++)
    {
      oCards[j].style.backgroundColor='hsl(228, 28%, 20%)';
    }
  }
  else
  {
    document.querySelector('.background-style').setAttribute('style','background-color:  hsl(225, 100%, 98%);');
    document.documentElement.setAttribute('style','background-color: hsl(0, 0%, 100%);');
    //for social media dashboard
    for(let i =0;i<doc.length;i++)
    {
      let cName = doc[i].className;
      if(cName.includes("instagram"))
      {
        doc[i].setAttribute('style','background:linear-gradient(to right , hsl(227, 47%, 96%) , hsl(227, 47%, 96%)),linear-gradient(to right , #FDC468,#DF4996);'+
                                    'background-clip:padding-box , border-box;'+
                                    'background-origin:padding-box, border-box;');
      }
      else
      {
        doc[i].style.backgroundColor='hsl(227, 47%, 96%)';
      }

    }

    //for overviewcards at the bottom
    for(let j=0;j<oCards.length;j++)
    {
      oCards[j].style.backgroundColor='hsl(227, 47%, 96%)';
    }
  }
}
