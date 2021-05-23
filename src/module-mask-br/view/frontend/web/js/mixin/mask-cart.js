define(["uiRegistry","Eloom_MaskBr/js/view/mask-cart"],function(a,b){return function(c){a.async("checkoutProvider")(function(d){d.on("shippingAddress",function(e){b.apply()})});return c}});
