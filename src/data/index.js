export const data = {

  iconProducts: [
    {
      to: "/product/detail",
      img: "IconLaptop",
      title: "Laptop",
      text: " Upto 20% off",
      tips: "Sony, Dell, Lenovo",
      cssClass: "display-1 text-primary",
      id : 1
    },
    {
      to: "/product/detail",
      img: "IconHeadset",
      title: "Headset",
      text: " Upto 50% off",
      tips: "Sony, Dell, Lenovo",
      cssClass: "display-1 text-secondary",
    },
    {
      to: "/product/detail",
      img: "IconPhone",
      title: "Phone",
      text: " Upto 20% off",
      tips: "Sony, Dell, Lenovo",
      cssClass: "display-1 text-danger",
    }
  ],
  products: [
    {
      id: 1,
      sku: "FAS-01",
      link: "/product/detail",
      name: "product 1",
      img: "../../images/products/tshirt_red_480x400.webp",
      price: 180,
      originPrice: 200,
      discountPrice: 20,
      discountPercentage: 10,
      isNew: true,
      isHot: false,
      star: 4,
      isFreeShipping: true,
      description:
        "Nulla sodales sit amet orci eu vehicula. Curabitur metus velit, fermentum a velit ac, sodales egestas lacus. Etiam congue velit vel luctus dictum. Pellentesque at pellentesque sapien.",
    },
    {
      id: 2,
      sku: "FAS-02",
      link: "/product/detail",
      name: "product 2",
      img: "../../images/products/tshirt_grey_480x400.webp",
      price: 475,
      originPrice: 0,
      discountPrice: 0,
      discountPercentage: 0,
      isNew: false,
      isHot: true,
      star: 3,
      isFreeShipping: true,
      description:
        "Maecenas suscipit volutpat gravida. Nulla hendrerit nisi a lectus blandit aliquam. Integer enim magna, consequat sed justo nec, auctor sagittis urna.",
    },
    {
      id: 3,
      sku: "FAS-03",
      link: "/product/detail",
      name: "product 3",
      img: "../../images/products/tshirt_black_480x400.webp",
      price: 1900,
      originPrice: 2000,
      discountPrice: 100,
      discountPercentage: 0,
      isNew: true,
      isHot: true,
      star: 2,
      isFreeShipping: true,
      description:
        "Vivamus sapien eros, molestie sed lacus vitae, lacinia volutpat ipsum. Nam sollicitudin lorem eget ornare vulputate.",
    }
  ]
};
