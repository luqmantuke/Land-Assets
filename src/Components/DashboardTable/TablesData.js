const TablesData={
   Custmerdata : [
    { icon: 'client-myplots@4x.png', text: "My Plots",linkTo:'myPlots' },
    { icon: 'client-pendingpayment@4x.png', text: "Pending Payments",linkTo:'payments' },
    { icon: 'client-booked@4x.png', text: "Booked Plots",linkTo:'bookedPlots' },
    { icon: 'client-wishlist@4x.png', text: "My Wishlist" ,linkTo:'wishlist'},
    { icon: 'client-resale@4x.png', text: "Plots on Resale",linkTo:'resalePlots' },
    { icon: 'client-notification@4x.png', text: "Notifications",linkTo:'notifications' },
    { icon: 'client-beagent@4x.png', text: "Become an Agent",linkTo:'becomeAgent' },
    { icon: 'client-support@4x.png', text: "Support" ,linkTo:'support'},
    { icon: 'client-settings@4x.png', text: "Settings",linkTo:'settings' },
    { icon: '', text: "Empty",linkTo:'empty' },
  ],
  Agentdata : [
    { icon: 'client-myplots@4x.png', text: "View All Plots ",linkTo:'viewPlots' },
    { icon: 'client-pendingpayment@4x.png', text: "Sold Plots",linkTo:'soldPlots' },
    { icon: 'client-booked@4x.png', text: "Pending Payments",linkTo:'pendingPayments' },
    { icon: 'Agent-reserved@4x.png', text: "Reserved Plots" ,linkTo:'reservedPlots'},
    { icon: 'client-beagent@4x.png', text: "Booked for Visits",linkTo:'bookVisits' },
    { icon: 'client-resale@4x.png', text: "My Payouts",linkTo:'payouts' },
    { icon: 'client-beagent@4x.png', text: "My Wishlist",linkTo:'agentWishlist' },
    { icon: 'client-support@4x.png', text: "Support" ,linkTo:'support'},
    { icon: 'agent-refer@4x.png', text: "Refer another Agent",linkTo:'referAgent' },
    { icon: 'client-settings@4x.png', text: "Settings",linkTo:'agentSettings' },

  ],
  
  
    myPlotsTable:[
        [ "Plot No", "Estate Name", "Size", "Price", "Pending Payment"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "Fully Paid"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "Tsh. 7,000,000"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "Fully Paid" ],
    ],
    paymentsTable:[
        [ "Plot No", "Estate Name", "Next Installment", "Amount", "Remaining Balance","Status"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh.7,500,000","Pending"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh. 7,500,000","Overdue"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh. 7,500,000","Paid" ],
        ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh. 7,500,000","Paid" ],
    ],
    pendingpaysTable:[
      [ "Plot No", "Estate Name", "Next Installment", "Amount", "Remaining Balance","Status","Details"],
      ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh.7,500,000","Pending","Plot Details"],
      ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh. 7,500,000","Overdue","Plot Details"],
      ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh. 7,500,000","Paid","Plot Details" ],
      ["140","Nyere Garden,Malimbika,Kigambanin", "24 November 2023", "Tsh. 15,000,000", "Tsh. 7,500,000","Paid","Plot Details" ],
  ],
    bookingTable:[
        [ "Plot No", "Estate Name", "Size", "Price", "Booking Date","Day to Visit","Status"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","24 January 2024","Sold"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","12 February 2024","Available"],
      
    ],
    reservedTable:[
      [ "Plot No", "Estate Name", "Size", "Price", "Reserved Date","Status"],
      ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","6 days left"],
      ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","3 days left"],
    
  ],
    wishlistTable:[
        [ "Plot No", "Estate Name", "Size", "Price", "Day Added","Status"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","Sold"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","Available"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","Available"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","Sold"],
      
    ],
    resaleTable:[
        [ "Plot No", "Estate Name", "Size", "Price", "Day Added","Status"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","Sold"],
        ["140","Nyere Garden,Malimbika,Kigambanin", "sqm 528", "Tsh. 13,000,000", "24 November 2023","Available"],
       
      
    ],
    headings:[
        "My Plots",
        "Payments",
        "Site Visit Bookings",
        "Wishlist",
        "Plots on Resale",
        "Notification",
        "Support",
        "Settings"


    ],
    agent_headings:[
      "Sold Plots",
      "Pending Payments",
      "Reserved Plots",
      "Site Visit Bookings",
      
      " Wish List",
      "Notification",
      "Support",
      "Settings"


  ],
    button1:[
         "Remove",
         "Plot Details",
         "Buy Now"
    ],
    button2:[
        "Plot Details",
        "Pay Now"
    ],
    buttons3:[
        "Remove",
        "Share"
    ],
    buttons4:[
      "Payment Details",
      "Pay Now"
  ],
  buttons5:[
    "Remove",
    "View Details",
    "Sell Now"
],

    elements:[
        { color: "red", data: { title: "Principal Amount", description: "Tsh. 37,000,000" } },
        { color: "green", data: { title: "Total Paid", description: "Tsh. 23,000,000" } },
        { color: "orange", data: { title: "Total Pending", description: "Tsh. 14,000,000" } }, 
      ],
      empty:[

      ],






}
export default TablesData;

 export const initialNotificationsData = [
    {
      id: 1,
      type: 'notification',
      date_time:'24 Nov 2023 at 9:30 AM',
      heading: 'Land Assets',
      content: 'Payment Confirmation:Your Payment was successful.',
      desc: 'Congratulation your payment has been successful.Thank you for your prompt pay...',
  
    },
    {
      id: 2,
      type: 'message',
      heading: 'New Message',
      content: 'Payment Confirmation:Your Payment was successful.',
      desc: 'Congratulation your payment has been successful.Thank you for your prompt pay...',
      date_time:'24 Nov 2023 at 9:30 AM',
    },
    {
      id: 3,
      type: 'notification',
      date_time:'24 Nov 2023 at 9:30 AM',
      heading: 'Land Assets',
      content: 'Payment Confirmation:Your Payment was successful.',
      desc: 'Congratulation your payment has been successful.Thank you for your prompt pay...',
  
    },
    {
      id: 4,
      type: 'notification',
      date_time:'24 Nov 2023 at 9:30 AM',
      heading: 'Land Assets',
      content: 'Payment Confirmation:Your Payment was successful.',
      desc: 'Congratulation your payment has been successful.Thank you for your prompt pay...',
  
    },
   
  ];