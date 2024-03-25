drop policy "Enable read access for all users" on "Eukami_v1"."Product";

alter table "Eukami_v1"."Checkout" add column "DeliveryMethod" json;

alter table "Eukami_v1"."Checkout" add column "checkoutUrl" text not null;

alter table "Eukami_v1"."Checkout" add column "totalPrice" double precision not null;

CREATE UNIQUE INDEX "Checkout_checkoutUrl_key" ON "Eukami_v1"."Checkout" USING btree ("checkoutUrl");

alter table "Eukami_v1"."Checkout" add constraint "Checkout_checkoutUrl_key" UNIQUE using index "Checkout_checkoutUrl_key";

create policy "Enable read access for all users"
on "Eukami_v1"."Product"
as permissive
for select
to anon, authenticated, service_role
using (true);



