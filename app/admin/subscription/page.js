/*
 * Business-IMS — Inventory Management System
 * Copyright (c) 2025 Sk Sahbir Hossain
 * Licensed under a custom license. Personal use, Unauthorized use, reproduction, or distribution is strictly prohibited.
 * Official Repository: https://github.com/sksabbirhossain/business-ims
 *Contact Info: https://www.linkedin.com/in/sk-sabbir-hossain
 */

import SubscriptionForm from "@/components/admin/Subscription/SubscriptionForm";
import Container from "@/components/common/Container/Container";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import StripeProvider from "@/utils/admin/stripeProvider";

export const metadata = {
  title: "Subscription",
};

export default function Subscription() {
  return (
    <Container>
      <PageHeader
        headText="Subscription"
        linkName="Subscription list"
        link="/admin/subscription-list"
      />
      <div className="flex items-center justify-center rounded-md bg-white/50 px-2 py-3 shadow-sm shadow-primary backdrop-blur">
        <StripeProvider>
          <SubscriptionForm />
        </StripeProvider>
      </div>
    </Container>
  );
}
