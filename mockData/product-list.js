/*
    PRODUCT MODEL
    {
        id: number,
        name: string,
        label: string
        category: string,
        old_price: string,
        new_price: string,
        rating: number,
        url: string
    }
*/

module.exports = {
    render_ratings: function(rating) {
        var full, half, empty;
        full =  Math.floor(rating);
        half =  (rating % 1 > 0 < 1) ? 1 : 0;
        empty = 5 - (Math.ceil(rating));
        
        // return `<span>${full}</span><span>${half}</span><span>${empty}</span>`;
        return `hi daisy`;
    },
    list: [
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            category: "waist_trainers",
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME"
        },
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            category: "waist_trainers",
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME"
        },
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            category: "waist_trainers",
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME"
        },
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            category: "waist_trainers",
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME"
        },
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            category: "waist_trainers",
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME"
        },
        {
            id: 0,
            name: "waist_trainer_0",
            label: "Waist Trainer",
            category: "waist_trainers",
            old_price: "$120",
            new_price: "$85",
            rating: 4.5,
            url: "https://source.unsplash.com/k8OCHhEymME"
        }
    ]
}