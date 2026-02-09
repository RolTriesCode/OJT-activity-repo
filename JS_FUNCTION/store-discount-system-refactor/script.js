/*
 * Store Discount System Refactor
 * DOCU: Returns the discount rate (as a decimal) based on customer type and purchase amount.
 *       Invalid purchase_amount is treated as 0; invalid customer_type is treated as "non-member";
 *       a console warning is logged for each.
 * @param {string} customer_type - "member" or "non-member"; determines which discount tier applies
 * @param {number} purchase_amount - Total purchase amount; must be a non-negative number
 * @returns {number} - Discount rate as decimal (e.g. 0.20 for 20%). Returns 0 for invalid amount.
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */

function getDiscount(customer_type, purchase_amount) {
    // Input validation
    if (typeof purchase_amount !== "number" || purchase_amount < 0 || isNaN(purchase_amount)) {
        console.warn(
            `[getDiscount] Invalid purchase_amount "${purchase_amount}" – treating as 0. Expected a positive number.`
        );
        purchase_amount = 0;
    }

    if (customer_type !== "member" && customer_type !== "non-member") {
        console.warn(
            `[getDiscount] Invalid customer_type "${customer_type}" – treating as "non-member". Expected "member" or "non-member".`
        );
        customer_type = "non-member";
    }

    // Discount rules
    if (customer_type === "member") {
        if (purchase_amount >= 1000) return 0.20;
        if (purchase_amount >= 500) return 0.10;
        if (purchase_amount > 0) return 0.05;
        return 0;
    }

    if (customer_type === "non-member") {
        if (purchase_amount >= 1000) return 0.10;
        if (purchase_amount >= 500) return 0.05;
        return 0;
    }

    return 0;
}

/*  
 * DOCU: Computes the final price after applying a discount, plus the discount amount and percentage.
 * @param {number} purchase_amount - Original purchase amount before discount
 * @param {number} discountRate - Discount rate as decimal (e.g. 0.20 for 20%)
 * @returns {{ finalPrice: number, discountAmount: number, discountPercent: number }} - Object with finalPrice, discountAmount (rounded to 2 decimals), and discountPercent (integer)
 *
 * Last Updated: 2026-02-09
 * Author: Errol Tabangen
 * Last Updated By: Errol Tabangen
 */

function calculateFinalPrice(purchase_amount, discountRate) {
    const discountAmount = Math.round(purchase_amount * discountRate * 100) / 100;
    const finalPrice = Math.round((purchase_amount - discountAmount) * 100) / 100;
    const discountPercent = Math.round(discountRate * 100);

    return {
        finalPrice,
        discountAmount,
        discountPercent,
    };
}

// Array of customer objects
const customers = [
    { name: "Errol", customer_type: "member", purchase_amount: 100 },
    { name: "Jericko", customer_type: "member", purchase_amount: 800 },
    { name: "Jade", customer_type: "non-member", purchase_amount: 1200 },
];

for (const customer of customers) {
    const discountRate = getDiscount(customer.customer_type, customer.purchase_amount);
    const result = calculateFinalPrice(customer.purchase_amount, discountRate);

    console.log(
        `${customer.name} (${customer.customer_type}) - Original: $${customer.purchase_amount} → Discount: ${result.discountPercent}% ($${result.discountAmount}) → Final: $${result.finalPrice}`
    );
}
