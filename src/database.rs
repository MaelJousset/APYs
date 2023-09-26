use rocket_sync_db_pools::rusqlite;

#[database("rusqlite")]
pub struct DbConn(rusqlite::Connection);

pub fn init() {
    rocket::ignite().attach(DbConn::fairing()).launch();
}
