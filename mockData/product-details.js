/*
    PRODUCT MODEL
    {
        id: number,
        name: string,
        label: string
        categories: string,
        old_price: string,
        new_price: string,
        rating: number,
        url: string
        ...
        ...
        ...
    }
*/

module.exports = {
    sizes_list: ["XS","S","M","L","XL","XXL","XXXL"],
    details_list: [
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            categories: ["waist_trainers"],
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME",
            sizes: ["XS","S","XL",],
            colors: ["#fff","#222","#44a"],
            info: {
                summary: " Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for something that can make your interior look awesome, and at the same time.",
                features: [
                    "Unwind in this comfortable modal knit sleep set",
                    "Button down, notch collar neckline with left chest pocket",
                    "Drawstring elastic waistband for a customized fit",
                ],
                content: "Body: 80% Modal, 13% Azlon, 7% Spandex.",
                care: "Machine wash cold, tumble dry low.",
                origin: "Imported"
            },
            exchange: {
                shipping: {
                    title: "FREE 2-DAY SHIPPING",
                    summary: "It's simple. Get Free 2-Day Shipping by placing an order of $70+ or purchasing any of our 3,000+ qualifying styles. Orders ship directly from our warehouse to you. U.S. orders only.",
                    url: ""
                },
                returns: {
                    title: "RETURNS & EXCHANGES",
                    summary: "Returns can wait! Your health and that of our employees’ matter most. Right now, take good care of you and yours, and we’ll do the same. When the time comes, we’ll be here to support you. Due to continued concerns about the coronavirus, we have extended the return window to AUGUST 1, 2020 for all purchases made between January 1, 2020 and May 31, 2020.",
                    url: ""
                }
            },
            reviews: [
                {
                    username: "robia_24",
                    avatar_url: "https://unsplash.com/photos/yk0qZwU0J1Y",
                    rating: 4,
                    title: "Loved it",
                    comment: "I love it and I'm seeing results with my waist getting smaller faster when I work out",
                    date: "2/12/2020"
                }
            ]
        }
    ]
}