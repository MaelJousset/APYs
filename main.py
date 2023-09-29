import time
import myswap

XLSX_FILE = "data.xlsx"

# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    while True:
        myswap_datas = myswap.init_myswap_driver()
        myswap.write_myswap_xlsx(myswap_datas, XLSX_FILE)
        time.sleep(24.0 * 60.0 * 60.0)