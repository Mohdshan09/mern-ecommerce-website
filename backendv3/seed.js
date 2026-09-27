// Seeds the products collection with sample clothing. Prices are in INR (₹).
//
// Usage (from backendv3/):
//   npm run seed           -> adds products, skipping names that already exist
//   npm run seed -- --reset -> deletes ALL products first, then seeds
//
// Images come from frontendv3/src/assets and are uploaded to Cloudinary under
// the "ecommerce-seed" folder. Uploads use fixed public_ids with overwrite:false,
// so re-running the seed reuses the already-uploaded images.

import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import { v2 as cloudinary } from 'cloudinary'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import productModel from './models/productModel.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ASSETS_DIR = path.join(__dirname, '..', 'frontendv3', 'src', 'assets')
const CLOUDINARY_FOLDER = 'ecommerce-seed'

const ADULT_SIZES = ['S', 'M', 'L', 'XL', 'XXL']

// Marvel collection (custom photos 1.jpg - 21.jpg). Listed first so they are
// inserted first and show up in "Latest Collections" on the home page.
// "We Are Venom" is the tee shown in the home page hero banner (24.jpg is a crop of 10.jpg).
const marvelProducts = [
    // ---------- Men / Topwear ----------
    {
        name: 'Men We Are Venom Oversized T-shirt',
        description: 'Oversized black tee with a bold "We Are Venom" front print and Venom sleeve graphics. Heavy cotton with dropped shoulders.',
        price: 799, category: 'Men', subCategory: 'Topwear',
        sizes: ADULT_SIZES, bestseller: true,
        images: ['10.jpg'],
    },
    {
        name: 'Men Red Hulk Oversized Graphic T-shirt',
        description: 'Black oversized tee featuring Red Hulk from Captain America: Brave New World with electric lightning detailing.',
        price: 749, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: true,
        images: ['1.jpg'],
    },
    {
        name: 'Men Moon Knight Back Print Full Sleeve T-shirt',
        description: 'Navy full sleeve tee with a detailed Moon Knight back print framed by Egyptian hieroglyphs.',
        price: 849, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['2.jpg'],
    },
    {
        name: 'Men Marvel Heroes All-Over Print T-shirt',
        description: 'Oversized black tee with neon line-art of Thor, Captain America, Spider-Man, Black Panther and more.',
        price: 899, category: 'Men', subCategory: 'Topwear',
        sizes: ADULT_SIZES, bestseller: false,
        images: ['3.jpg'],
    },
    {
        name: 'Men Spidey Graphic Print T-shirt',
        description: 'Maroon melange tee with a vibrant Spidey front graphic and contrast stitching.',
        price: 649, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: true,
        images: ['4.jpg'],
    },
    {
        name: 'Men Iron Man Arc Reactor T-shirt',
        description: 'Black regular fit tee with a torn-suit Iron Man arc reactor chest print.',
        price: 599, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['5.jpg'],
    },
    {
        name: 'Men Venom Face Oversized T-shirt',
        description: 'Navy oversized tee with the iconic Venom grin printed on the front.',
        price: 699, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL'], bestseller: false,
        images: ['6.jpg'],
    },
    {
        name: 'Men Deadpool Do I Look Like I Care T-shirt',
        description: 'Black regular fit tee with a distressed "Do I Look Like I Care?" Deadpool print.',
        price: 549, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'], bestseller: false,
        images: ['7.jpg'],
    },
    {
        name: 'Men Black Panther Back Print Oversized T-shirt',
        description: 'Black oversized tee with a large mech-style Black Panther back print and Avengers logo.',
        price: 799, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL'], bestseller: true,
        images: ['8.jpg'],
    },
    {
        name: 'Men Deadpool & Wolverine Oversized T-shirt',
        description: 'Black oversized tee with a Deadpool & Wolverine movie graphic on the front.',
        price: 749, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: false,
        images: ['9.jpg'],
    },
    {
        name: 'Men Wolverine Logan Oversized T-shirt',
        description: 'Black oversized tee with a yellow Wolverine "Logan" logo and full-colour character print.',
        price: 749, category: 'Men', subCategory: 'Topwear',
        sizes: ADULT_SIZES, bestseller: false,
        images: ['11.jpg'],
    },
    {
        name: 'Men Marvel Colour Block Full Sleeve T-shirt',
        description: 'Waffle-knit full sleeve tee with a red Marvel logo, contrast red sleeve and hero icons down the arm.',
        price: 899, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['12.jpg'],
    },
    {
        name: 'Men Deadpool Marvel Logo T-shirt',
        description: 'Navy regular fit tee with a vertical Marvel logo and Deadpool mask print.',
        price: 549, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L'], bestseller: false,
        images: ['13.jpg'],
    },
    {
        name: 'Men Red Hulk Back Print Oversized T-shirt',
        description: 'Red textured oversized tee with a large Red Hulk back print and Captain America sleeve detail.',
        price: 799, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: false,
        images: ['14.jpg'],
    },
    {
        name: 'Men Chibi Iron Man Marvel Oversized T-shirt',
        description: 'White oversized tee with the Marvel logo and a cute chibi Iron Man flying through it.',
        price: 699, category: 'Men', subCategory: 'Topwear',
        sizes: ADULT_SIZES, bestseller: true,
        images: ['15.jpg'],
    },
    {
        name: 'Men Spider Glitch Logo Oversized T-shirt',
        description: 'Black oversized tee with a red glitch-effect spider emblem on the chest.',
        price: 649, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['16.jpg'],
    },

    // ---------- Men / Winterwear ----------
    {
        name: 'Men Amazing Spider-Man Comic Cover Hoodie',
        description: 'Black pullover hoodie with a classic Amazing Spider-Man comic cover print and kangaroo pocket.',
        price: 1399, category: 'Men', subCategory: 'Winterwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: true,
        images: ['17.jpg'],
    },
    {
        name: 'Men Marvel Logo Classic Hoodie',
        description: 'Black fleece hoodie with the classic red Marvel box logo, drawstring hood and front pocket.',
        price: 1299, category: 'Men', subCategory: 'Winterwear',
        sizes: ADULT_SIZES, bestseller: false,
        images: ['18.jpg'],
    },
    {
        name: 'Men Amazing Spider-Man Vintage Hoodie',
        description: 'Sand coloured hoodie with a vintage Amazing Spider-Man comic print. Soft brushed fleece inside.',
        price: 1399, category: 'Men', subCategory: 'Winterwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['19.jpg'],
    },
    {
        name: 'Men Marvel Comics Retro Hoodie',
        description: 'Black hoodie with a retro Marvel Comics logo and Captain America and Iron Man head prints.',
        price: 1349, category: 'Men', subCategory: 'Winterwear',
        sizes: ['M', 'L', 'XL'], bestseller: false,
        images: ['20.jpg'],
    },
    {
        name: 'Men Doctor Doom Washed Oversized Hoodie',
        description: 'Acid-washed charcoal oversized hoodie with a large Doctor Doom graphic and Marvel logo.',
        price: 1599, category: 'Men', subCategory: 'Winterwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: true,
        images: ['21.jpg'],
    },
]

const products = [
    ...marvelProducts,

    // ---------- Men / Topwear ----------
    {
        name: 'Men Round Neck Pure Cotton T-shirt',
        description: 'A breathable, lightweight pure cotton t-shirt with a classic round neck. Soft on the skin and made for everyday wear.',
        price: 499, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL'], bestseller: true,
        images: ['p_img2_1.png', 'p_img2_2.png', 'p_img2_3.png', 'p_img2_4.png'],
    },
    {
        name: 'Men Classic Crew Neck Tee',
        description: 'A wardrobe staple crew neck tee in combed cotton with a regular fit that keeps its shape wash after wash.',
        price: 399, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['p_img4.png'],
    },
    {
        name: 'Men Relaxed Fit Cotton T-shirt',
        description: 'Relaxed fit cotton t-shirt with dropped shoulders for an easy, laid-back look.',
        price: 549, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: false,
        images: ['p_img8.png'],
    },
    {
        name: 'Men Slim Fit Everyday Tee',
        description: 'Slim fit tee with a touch of stretch, cut close to the body for a clean silhouette.',
        price: 449, category: 'Men', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L'], bestseller: true,
        images: ['p_img11.png'],
    },
    {
        name: 'Men Printed Plain Cotton Shirt',
        description: 'Cotton shirt with a spread collar and full button placket. Dress it up or wear it casual.',
        price: 899, category: 'Men', subCategory: 'Topwear',
        sizes: ['M', 'L', 'XL'], bestseller: false,
        images: ['p_img39.png'],
    },
    {
        name: 'Men Essential Heavyweight Tee',
        description: 'A heavyweight cotton tee with a structured drape and reinforced neckline.',
        price: 599, category: 'Men', subCategory: 'Topwear',
        sizes: ADULT_SIZES, bestseller: false,
        images: ['p_img32.png'],
    },

    // ---------- Men / Bottomwear ----------
    {
        name: 'Men Tapered Fit Flat-Front Trousers',
        description: 'Flat-front trousers with a tapered leg, belt loops and side pockets. Smart enough for the office.',
        price: 1199, category: 'Men', subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: true,
        images: ['p_img7.png'],
    },
    {
        name: 'Men Relaxed Chino Pants',
        description: 'Relaxed fit chinos in soft cotton twill with a mid-rise waist and straight leg.',
        price: 999, category: 'Men', subCategory: 'Bottomwear',
        sizes: ['M', 'L', 'XL', 'XXL'], bestseller: false,
        images: ['p_img10.png'],
    },
    {
        name: 'Men Slim Fit Formal Trousers',
        description: 'Slim fit formal trousers with a pressed crease and hidden hook closure.',
        price: 1299, category: 'Men', subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L'], bestseller: false,
        images: ['p_img15.png'],
    },

    // ---------- Men / Winterwear ----------
    {
        name: 'Men Slim Fit Relaxed Denim Jacket',
        description: 'Classic denim jacket with button front, chest pockets and a slim, layer-friendly fit.',
        price: 1899, category: 'Men', subCategory: 'Winterwear',
        sizes: ['M', 'L', 'XL'], bestseller: true,
        images: ['p_img28.png'],
    },
    {
        name: 'Men Washed Trucker Jacket',
        description: 'Vintage washed trucker jacket with a boxy cut and adjustable waist tabs.',
        price: 1999, category: 'Men', subCategory: 'Winterwear',
        sizes: ADULT_SIZES, bestseller: false,
        images: ['p_img40.png'],
    },
    {
        name: 'Men Casual Winter Jacket',
        description: 'Warm casual jacket for chilly days, with a soft lining and deep hand pockets.',
        price: 2299, category: 'Men', subCategory: 'Winterwear',
        sizes: ['L', 'XL', 'XXL'], bestseller: false,
        images: ['p_img46.png'],
    },

    // ---------- Women / Topwear ----------
    {
        name: 'Women Round Neck Cotton Top',
        description: 'A soft round neck cotton top with a flattering regular fit, perfect for daily wear.',
        price: 449, category: 'Women', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L'], bestseller: true,
        images: ['p_img1.png'],
    },
    {
        name: 'Women Relaxed Fit Cotton Blouse',
        description: 'Airy cotton blouse with a relaxed silhouette that pairs well with jeans or skirts.',
        price: 649, category: 'Women', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['p_img5.png'],
    },
    {
        name: 'Women Fitted Casual Top',
        description: 'Fitted casual top in stretch cotton jersey for all-day comfort.',
        price: 399, category: 'Women', subCategory: 'Topwear',
        sizes: ['S', 'M'], bestseller: false,
        images: ['p_img13.png'],
    },
    {
        name: 'Women Everyday Basic Tee',
        description: 'The basic tee you reach for every day: soft, breathable and easy to style.',
        price: 349, category: 'Women', subCategory: 'Topwear',
        sizes: ADULT_SIZES, bestseller: true,
        images: ['p_img29.png'],
    },

    // ---------- Women / Bottomwear ----------
    {
        name: 'Women Palazzo Pants with Waist Belt',
        description: 'Flowy wide-leg palazzo pants with a matching waist belt for a defined look.',
        price: 799, category: 'Women', subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: true,
        images: ['p_img20.png'],
    },
    {
        name: 'Women Wide Leg Flowy Palazzo',
        description: 'Lightweight wide leg palazzo with an elasticated waist, made for warm days.',
        price: 699, category: 'Women', subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L'], bestseller: false,
        images: ['p_img22.png'],
    },

    // ---------- Women / Winterwear ----------
    {
        name: 'Women Zip-Front Relaxed Fit Jacket',
        description: 'Relaxed fit jacket with a full zip front, stand collar and side pockets.',
        price: 1699, category: 'Women', subCategory: 'Winterwear',
        sizes: ['S', 'M', 'L'], bestseller: true,
        images: ['p_img21.png'],
    },
    {
        name: 'Women Lightweight Winter Jacket',
        description: 'A lightweight insulated jacket that keeps you warm without the bulk.',
        price: 1799, category: 'Women', subCategory: 'Winterwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['p_img26.png'],
    },
    {
        name: 'Women Casual Layering Jacket',
        description: 'Casual layering jacket with ribbed cuffs, easy to throw over any outfit.',
        price: 1499, category: 'Women', subCategory: 'Winterwear',
        sizes: ['M', 'L', 'XL'], bestseller: false,
        images: ['p_img36.png'],
    },

    // ---------- Kids / Topwear ----------
    {
        name: 'Girls Round Neck Cotton Top',
        description: 'Soft cotton top for girls with a comfy round neck, gentle on young skin.',
        price: 349, category: 'Kids', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L'], bestseller: true,
        images: ['p_img3.png'],
    },
    {
        name: 'Girls Everyday Cotton Tee',
        description: 'Easy-care cotton tee for girls, made for school, play and everything in between.',
        price: 299, category: 'Kids', subCategory: 'Topwear',
        sizes: ['S', 'M'], bestseller: false,
        images: ['p_img9.png'],
    },
    {
        name: 'Boy Round Neck Pure Cotton T-shirt',
        description: 'Pure cotton t-shirt for boys with a durable round neck and relaxed fit.',
        price: 349, category: 'Kids', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L'], bestseller: true,
        images: ['p_img14.png'],
    },
    {
        name: 'Boy Casual Play Tee',
        description: 'A tough, comfy tee for active boys that holds up to rough play.',
        price: 299, category: 'Kids', subCategory: 'Topwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: false,
        images: ['p_img19.png'],
    },

    // ---------- Kids / Bottomwear ----------
    {
        name: 'Kid Tapered Slim Fit Trouser',
        description: 'Slim fit trousers for kids with an adjustable waist and a tapered leg.',
        price: 549, category: 'Kids', subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L'], bestseller: false,
        images: ['p_img43.png'],
    },
    {
        name: 'Kids Everyday Comfort Pants',
        description: 'Comfortable everyday pants for kids with an elastic waist and soft fabric.',
        price: 449, category: 'Kids', subCategory: 'Bottomwear',
        sizes: ['S', 'M', 'L', 'XL'], bestseller: true,
        images: ['p_img47.png'],
    },
]

const uploadImage = async (fileName) => {
    const publicId = path.parse(fileName).name
    const result = await cloudinary.uploader.upload(path.join(ASSETS_DIR, fileName), {
        folder: CLOUDINARY_FOLDER,
        public_id: publicId,
        overwrite: false,
        resource_type: 'image',
    })
    return result.secure_url
}

const seed = async () => {
    const reset = process.argv.includes('--reset')

    await connectDB()
    await connectCloudinary()

    if (reset) {
        const { deletedCount } = await productModel.deleteMany({})
        console.log(`Removed ${deletedCount} existing products`)
    }

    const existingNames = new Set(
        (await productModel.find({}, 'name')).map((p) => p.name)
    )

    let added = 0
    let skipped = 0
    // Stagger dates so "Latest Collection" has a stable, meaningful order
    const baseDate = Date.now()

    for (const [index, product] of products.entries()) {
        if (existingNames.has(product.name)) {
            console.log(`- skip   ${product.name} (already exists)`)
            skipped++
            continue
        }

        const imageUrls = await Promise.all(product.images.map(uploadImage))

        await productModel.create({
            ...product,
            images: imageUrls,
            date: baseDate - index * 60 * 1000,
        })
        console.log(`+ added  ${product.name}`)
        added++
    }

    console.log(`\nDone: ${added} added, ${skipped} skipped, ${products.length} in seed list`)
}

seed()
    .catch((error) => {
        console.error('Seeding failed:', error.message)
        process.exitCode = 1
    })
    .finally(() => mongoose.disconnect())
