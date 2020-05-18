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
            location: "/account"
        },
        {
            text: "Waist Trainers",
            location: "/account"
        },
        {
            text: "Shape Wear",
            location: "/account"
        },
        {
            text: "Butt Lifters",
            location: "/account"
        },
        {
            text: "Workout",
            location: "/account"
        },
        {
            text: "Contact Us",
            location: "/account"
        },
        {
            text: "Order Tracking",
            location: "/account"
        }
    ]
}