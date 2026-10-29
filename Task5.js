
function selectBestDiscount(price, offers) {
    let bestOffer = null;
    let lowestPrice = price;

    for (let offer of offers) {

        // Skip offers that do not meet the minimum price
        if (price < offer.minPrice) {
            continue;
        }

        let finalPrice = price;

        // Calculate the discount
        if (offer.type === "flat") {
            finalPrice = price - offer.value;
        } else if (offer.type === "percent") {
            finalPrice = price - (price * offer.value / 100);
        }

        // Final price cannot be negative
        finalPrice = Math.max(0, finalPrice);

        // Update only if this offer gives a lower price
        if (finalPrice < lowestPrice) {
            lowestPrice = finalPrice;
            bestOffer = offer;
        }
    }

    return bestOffer;
}
