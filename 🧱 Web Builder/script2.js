function cardsAdd(index,time,topic,title,views,days)
{
    function FilterViews(views)
    {
        if(views<1000){
            return views;
        }
        let views_k=views/1000;

        if(views_k<1000)
        {
            views_k = Math.floor(views_k);
            return `${views_k} K`;
        }
        let views_M=views_k/1000;

        if(views_M<1000)
        {
            views_M=Math.floor(views_M);
            return `${views_M} M`;
        }

        let views_B=views_M/1000;
        views_B=Math.floor(views_B);

        return `${views_B} B`;

    }

    function FilterDays(day) {
        if (day < 30) {
            return `${day} day${day === 1 ? '' : 's'}`;
        }
        if (day >= 30 && day < 365) {
            let month = (day / 30).toFixed(1);
            return `${month} month${month == 1 ? '' : 's'}`;
        }

        let yrs = (day / 365).toFixed(1);
        return `${yrs} year${yrs == 1 ? '' : 's'}`;
    }


    let filtered_views=FilterViews(views);
    let filtered_days=FilterDays(days);

    
    const newCard=document.createElement('div');
    newCard.className="cards";
    let ele=document.getElementById("cardcontainer");

    newCard.innerHTML=`
            <div class="index">
                <p><b>${index}</b></p>
            </div>
            <div class="card_img_container">
                <img src="final_pic.jpg" alt="thumbnail" class="card_img">
                <div class="time-on-image">${time}</div>
            </div>
            <div class="cardcontent">
                <div class="l1">
                    
                        <p class="l1_cont">${topic}</p>  | 
                        <p class="l1_cont">${title}</p>
                    
                </div>
                <div class="l2">
                    <p class="l2_cont">CodeWithHarry </p> • <p class="l2_cont"> ${filtered_views} views</p> • <p class="l2_cont"> ${filtered_days} ago</p>
                </div>
            </div>
        `;

        ele.append(newCard);
}



let no_cards=parseInt(prompt("Enter the Number of cards you want to Add: "));
let time,topic,title,views,days;
for(let i=0;i<no_cards;i++)
{
    time=prompt("Enter the Duration of Video: ");
    topic=prompt("Enter the Topic of the Video: ");
    title=prompt("Enter the Title for this Video: ");
    views=prompt("Enter the views for this Video: ");
    days=parseInt(prompt("Enter the Total Days uploaded: "));

    cardsAdd(i+1,time,topic,title,views,days);
}

