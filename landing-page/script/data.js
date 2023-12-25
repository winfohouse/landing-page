const data = {
    title: "Women's Suttle Mountain",
    mainTitle: "Women's Suttle Mountain",
    mainTitle2: "Long Insulated Jacket",
    mainAbout: `The Columbia Suttle Mountain Long Insulated Jacket combines stylish looks with functional technology to keep you warm and dry. Made for women, this jacket features a water resistant shell, insulated with warm synthetic down, along with a faux fur trimmed hood, you'll actually enjoy heading out into the harsh elements with this jacket. The quality assembly, construction, and stitching infused into this jacket will instill a sense of confidence when the weather turns super blustery and cold. This versatile parka-style jacket features a water repellent shell, that infuses 100% synthetic down, and is lined with our signature Omni-HEAT thermal reflective lining — delivering winter performance you'll truly enjoy on any frigid outing.`,
    productLink: 'https://amzn.to/4ayLOqb',
    btnText1: 'Get it Now!',
    subTitle: "Women's Jacket",
    subAbout: "Melange 100% Polyester, Omni-Heat Reflective lining 100% polyester, synthetic down 100% polyester",
    btnText2: 'shop now',
    price: '$139.98',
    descountText: '-39%',
    imgPath: './Images/',
    imgs: {
        img0: {
            src: 'img-0_.jpg',
            alt: 'jacket'
        },
        img1: {
            src: 'img-1_.jpg',
            alt: 'jacket'
        },
        img2: {
            src: 'img-2_.jpg',
            alt: 'jacket'
        },
        img3: {
            src: 'img-3_.jpg',
            alt: 'jacket'
        },
        img4: {
            src: 'img-4_.jpg',
            alt: 'jacket'
        }
    },
    cards: {
        card1: {
            style: 'table',
            cardTitle: 'Shipping & Fee Details',
            details: {
                'price': '$139.98',
                'AmazonGlobal Shippin': '$101.15',
                'Estimated Import Fees Deposit': '$0.00',
                'Total': '$241.13',
            }
        },
        card2: {
            style: 'table',
            cardTitle: 'Product details',
            details: {
                'Package Dimensions': '20.16 x 18.42 x 8.98 inches; 3.4 Pounds',
                'Item model number': '1799751',
                'Department': 'womens',
                'Date First Available': 'October 11, 2018',
                'Manufacturer': 'Columbia',
                'ASIN': 'B07J9KFGD2',
                'Best Sellers Rank': '#4,223 in Clothing, Shoes &amp; Jewelry (See Top 100 in Clothing, Shoes &amp; Jewelry)',
                'Customer Reviews': '4.6 4.6 out of 5 stars 2,903 ratings',
            }
        },
        card3: {
            style: 'img',
            cardTitle: '',
            details: 'Size-chart.jpg'
        },
        card4: {
            style: 'list',
            cardTitle: 'About this item',
            details: ['Omni-Heat thermal reflective', 'Water resistant fabric', 'Faux down insulation', 'Attached, adjustable storm hood', 'Sherpa lined hood']
        },
        card5: {
            style: 'table',
            cardTitle: 'Product details',
            details: {
                'Fabric type': 'Melange 100% Polyester, Omni-Heat Reflective lining 100% polyester, synthetic down 100% polyester',
                'Care instructions': 'Machine Wash',
                'Origin': 'Imported',
                'Country of Origin': 'Vietnam',
            }
        },
    }
}





// make empty
$('.title').empty()
$('.mainTitle').empty()
$('.mainTitle2').empty()
$('.mainAbout').empty()
$('.btnText1').empty()
$('.subTitle').empty()
$('.subAbout').empty()
$('.btnText2').empty()
$('.price').empty()
$('.descountText').empty()

// add text
$('.title').append(data.title);
$('.mainTitle').append(data.mainTitle)
$('.mainTitle2').append(data.mainTitle2)
$('.mainAbout').append(data.mainAbout)
$('.btnText1').append(data.btnText1)
$('.subTitle').append(data.subTitle)
$('.subAbout').append(data.subAbout)
$('.btnText2').append(data.btnText2)
$('.price').append(`${data.price}<b style='color:#f00a'>(${data.descountText})</b>`)
$('.descountText').append(data.descountText)

// add productLink
$('.btnText1').attr('href', data.productLink)
$('.btnText2').attr('href', data.productLink)

// set images
$('.rewievImg').attr({
    'src': data.imgPath + data.imgs.img0.src,
    'alt': data.imgs.img0.src
})
// set option images
for (const Img in data.imgs) {
    $('.optionsPhoto').append(`<span><img class="dropWhite" src="${data.imgPath + data.imgs[Img].src}" alt="${data.imgs[Img].alt}"></span>`)
}

// set cards

for (const Card in data.cards) {
    if(data.cards[Card].style == 'table'){
        let details = [data.cards[Card].details]
        $('.cards').append(`
            <li class="card">
                <div>
                    <h3 class="card-title">${data.cards[Card].cardTitle}</h3>
                    <div class="card-content">
                        <table>
                            <tbody>
                            ${ 
                                details.map(a => {
                                    let b = Object.keys(a)
                                    let c = Object.values(a)
                                
                                    let p =  Object.keys(c)
                                    let tr ='';
                                        e = p.forEach(i => {
                                        tr += `<tr><td>${b[i]}</td><td>${c[i]}</td></tr>`
                                    });
                                    return tr
                            })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </li>
        `)
    }
    if(data.cards[Card].style == 'list'){
        let details = [data.cards[Card].details]
        $('.cards').append(`
            <li class="card">
                <div>
                    <h3 class="card-title">${data.cards[Card].cardTitle}</h3>
                    <div class="card-content">
                        <ul>
                            ${ 
                                details.map(a => {
                                    let c ='';
                                    a.map(b =>{
                                         c += `<li>${b}</li>`;
                                    })
                                    return c
                                })
                            }
                        </ul>
                    </div>
                </div>
            </li>
        `)
    }
    if(data.cards[Card].style == 'img'){
        $('.cards').append(`
            <li class="card">
                <div>
                    <h3 class="card-title">${data.cards[Card].cardTitle}</h3>
                    <div class="card-content">
                        <img src="${data.imgPath + data.cards[Card].details}" alt="${data.cards[Card].details}">
                    </div>
                </div>
            </li>
        `)
    }
}