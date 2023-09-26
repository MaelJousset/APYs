#[macro_use]
extern crate rocket;

use rocket::Request;

use rocket_db_pools::sqlx::{self, Row};
use rocket_db_pools::{Connection, Database};

#[derive(Database)]
#[database("sqlite_apys")]
struct APYs(sqlx::SqlitePool);

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/myswap", format = "json")]
async fn myswap(mut db: Connection<APYs>) -> Option<String> {
    sqlx::query("SELECT * FROM myswap")
        .fetch_one(&mut *db)
        .await
        .and_then(|r| Ok(r.try_get(0)?))
        .ok()
}

#[get("/jediswap", format = "json")]
async fn jediswap(mut db: Connection<APYs>) -> Option<String> {
    sqlx::query("SELECT * FROM myswap")
        .fetch_one(&mut *db)
        .await
        .and_then(|r| Ok(r.try_get(0)?))
        .ok()
}

#[get("/ekubo", format = "json")]
async fn ekubo(mut db: Connection<APYs>) -> Option<String> {
    sqlx::query("SELECT * FROM myswap")
        .fetch_one(&mut *db)
        .await
        .and_then(|r| Ok(r.try_get(0)?))
        .ok()
}

#[catch(404)]
fn not_found(req: &Request) -> String {
    format!("Sorry, '{}' is not a valid path.", req.uri())
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .register("/", catchers![not_found])
        .mount("/", routes![index, myswap, jediswap, ekubo])
}
