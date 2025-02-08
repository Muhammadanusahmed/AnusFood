import { defineType ,defineField } from "sanity"


export const food = defineType({
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Product Name',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Burger', value: 'Burger' },
                    { title: 'Sandwich', value: 'Sandwich' },
                    { title: 'Chicken', value: 'Chicken' },
                    { title: 'Pizza', value: 'Pizza' },
                    { title: 'Drink', value: 'Drink' },
                    { title: 'Non-Veg', value: 'Non-Veg' },
                ],
                layout: "dropdown"
            }      
        }),
        defineField({
            name: 'price',
            type: 'number',
            title: 'Current Price',
        }),
        defineField({
            name: 'DiscountPrice',
            type: 'number',
            title: 'if any run Discount',
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'Tags',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            }
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
        }),
        defineField({
            name: 'available',
            type: 'boolean',
            title: 'Available',
        }),
       
    ]
})