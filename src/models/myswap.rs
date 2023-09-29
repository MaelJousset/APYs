use chrono::prelude::*;
use serde::{Deserialize, Serialize};
use std::sync::{Arc, Mutex};

#[allow(non_snake_case)]
#[derive(Debug, Deserialize, Serialize, Clone)]
pub struct MySwap {
    pub id: Option<String>,
    pub tvl: Int,
    pub vol_24h: Int,
    pub vol_7d: Int,
    pub apr: Int,
}

pub struct AppState {
    pub myswap_db: Arc<Mutex<Vec<MySwap>>>,
}

impl AppState {
    pub fn init() -> AppState {
        AppState {
            myswap_db: Arc::new(Mutex::new(Vec::new())),
        }
    }
}

#[allow(non_snake_case)]
#[derive(Debug, Deserialize)]
pub struct UpdateMySwapSchema {
    pub tvl: Int,
    pub vol_24h: Int,
    pub vol_7d: Int,
    pub apr: Int,
}
