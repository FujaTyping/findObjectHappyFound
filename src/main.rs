use reqwest::Error;
mod fetch;
use fetch::*;

#[tokio::main]
async fn main() -> Result<(), Error> {

    let Respo = verycoolfetch().await?;
    println!("{:?}", Respo);

    Ok(())
}