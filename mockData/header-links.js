/*
    LINK MODEL
    {
        alt: string,
        icon: string,
        text: string,
        value: string,
        location: string,
        src: string
    }
*/

module.exports = {
    brand: {
        src: "https://cdn.shopify.com/s/files/1/0252/0298/2960/files/monkeyseeanddo_360x.png?v=1589116197",
        location: "/"
    },
    topHeader: [
        {
            icon: "fa fa-user",
            text: "Account",
            location: "/account"
        },
        {
            icon: "fa fa-shopping-cart",
            text: "My Cart",
            value: "$100",
            location: "/cart"
        }
    ],
    bottomHeader: [
        {
            text: "Today's Deals",
            location: "deals"
        },
        {
            text: "Waist Trainers",
            location: "waist_trainers"
        },
        {
            text: "Shape Wear",
            location: "shape_wear"
        },
        {
            text: "Butt Lifters",
            location: "butt_lifters"
        },
        {
            text: "Workout",
            location: "workout"
        },
        {
            text: "Contact Us",
            location: "/contact"
        },
        {
            text: "Order Tracking",
            location: "/tracking"
        }
    ]
}