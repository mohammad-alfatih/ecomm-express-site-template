/*
    FOOTER-LINK MODEL
    {
        heading: string,
        links: Link[]
    }
*/

module.exports = {
    brand: {
        src: "https://cdn.shopify.com/s/files/1/0252/0298/2960/files/monkeyseeanddo_360x.png?v=1589116197",
        location: "/"
    },
    footerLinks_1: {
        heading: "Links area 1",
        links: [
            {
                icon: "fa fa-user",
                text: "Account",
                location: "/account"
            },
            {
                icon: "fa fa-shopping-cart",
                text: "My Cart",
                location: "/cart"
            }
        ]
    },
    footerLinks_2: {
        heading: "Footer area 2",
        links: [
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
}