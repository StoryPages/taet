const $cardTextWrap = document.querySelectorAll('.card__wrap-text')
const $productImg = document.querySelectorAll('.product__img')

const images = [
	'./images/product/product-1.webp',
	'./images/product/product-2.webp',
	'./images/product/product-3.webp',
	'./images/product/product-4.webp',
	'./images/product/product-5.webp',
	'./images/product/product-6.webp',
	'./images/product/product-7.webp',
]

$productImg.forEach((img, index) => {
	if (images[index]) {
		img.src = images[index]
		img.alt = `Image ${index + 1}`
		img.loading = 'lazy'
		img.decoding = 'async'
	}
	if (index % 2 === 1) {
		img.classList.add('order')
	}
})

function waLinkMessage() {
	$cardTextWrap.forEach(products => {
		const $cardHeading = products.querySelector('.card__heading').dataset.title
		const $productBtn = products.querySelector('.product__btn')

		const message = `Здравствуйте!\nХочу заказать ${$cardHeading}`
		const waLink = `https://wa.me/79139420946?text=${encodeURIComponent(
			message
		)}`

		$productBtn.href = waLink
	})
}

waLinkMessage()
