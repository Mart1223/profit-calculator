'use client';

import { useState } from "react";

export default function ProfitCalculator() {
  const [price, setPrice] = useState(10016);
  const [discount, setDiscount] = useState(23);
  const [purchasePrice, setPurchasePrice] = useState(1846);
  const [commission, setCommission] = useState(23.5);
  const [acquiring, setAcquiring] = useState(2);
  const [logistics, setLogistics] = useState(923);
  const [fulfillment, setFulfillment] = useState(250);
  const [taxRate, setTaxRate] = useState(15);
  const [adsPercent, setAdsPercent] = useState(4);
  const [adsRubles, setAdsRubles] = useState(424.64);

  const sppPrice = price * (1 - discount / 100);
  const commissionAmount = sppPrice * commission / 100;
  const acquiringAmount = sppPrice * acquiring / 100;
  const adsAmount = sppPrice * adsPercent / 100;
  const totalCost = purchasePrice + logistics + fulfillment;
  const taxAmount = (sppPrice - totalCost) * taxRate / 100;

  return (
    <div>
      <h1>Profit Calculator</h1>
      <p>SPP Price: {sppPrice.toFixed(2)}</p>
      <p>Commission: {commissionAmount.toFixed(2)}</p>
      <p>Acquiring: {acquiringAmount.toFixed(2)}</p>
      <p>Ads (₽): {adsRubles.toFixed(2)}</p>
      <p>Total Cost: {totalCost.toFixed(2)}</p>
      <p>Tax: {taxAmount.toFixed(2)}</p>
    </div>
  );
}
