CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION handle_new_user();


create policy "Anyone can upload an avatar."
on "storage"."objects"
as permissive
for insert
to public
with check ((bucket_id = 'avatars'::text));


create policy "Avatar images are publicly accessible."
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'avatars'::text));


create policy "Give PUBLIC access to files 1ffg0oo_0"
on "storage"."objects"
as permissive
for insert
to public
with check ((bucket_id = 'images'::text));


create policy "Give authenticated users access to files 1ffg0oo_1"
on "storage"."objects"
as permissive
for update
to anon, authenticated, service_role
using ((bucket_id = 'images'::text));


create policy "Give authenticated users access to files 1ffg0oo_2"
on "storage"."objects"
as permissive
for delete
to anon, authenticated, service_role
using ((bucket_id = 'images'::text));


create policy "Give authenticated users access to files 1ffg0oo_3"
on "storage"."objects"
as permissive
for select
to anon, authenticated, service_role
using ((bucket_id = 'images'::text));


create policy "View All 1ffg0oo_0"
on "storage"."objects"
as permissive
for select
to public
using ((bucket_id = 'images'::text));



