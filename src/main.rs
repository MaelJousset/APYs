#[macro_use]
extern crate rocket;

use rocket::fs::NamedFile;
use rocket::Request;
use std::path::{Path, PathBuf};

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
fn myswap() -> &'static str {
    "Hello, world!"
}

#[get("/jediswap", format = "json")]
fn jediswap() -> &'static str {
    "Hello, world!"
}

#[get("/ekubo", format = "json")]
fn ekubo() -> &'static str {
    "Hello, world!"
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
