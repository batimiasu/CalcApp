import { CalcAppPage } from './app.po';
import {browser} from "protractor";

describe('複利計算のE2Eテスト', function() {
  let page: CalcAppPage;
  // テストデータ
  let INIT_VALUE = 1000;
  let RATE = 3;
  let RESULT = "10年後\n1,343円"

  beforeEach(() => {
    // ページオブジェクトのインスタンス家
    page = new CalcAppPage();
    // 対象ページを表示
    page.navigateTo();
  });

  afterEach(() => {
    //確認のための一時停止
    browser.sleep(3000);
  });

  it('複利計算の実行', () => {
    // 保存データのクリア
    browser.executeScript("window.localStorage.clear();");
    // 入力欄をクリア後、金額を入力
    page.initValueInput.clear();
    page.initValueInput.sendKeys(INIT_VALUE.toString());
    // 入力欄をクリア後、利率を入力
    page.rateInput.clear();
    page.rateInput.sendKeys(RATE.toString());
    // 複利計算結果を評価
    expect(page.result.getText()).toEqual(RESULT);
    // 入力データを保存
    page.saveButton.click();
  });

  it('保存データの表示', () => {
    // ブラウザをリロード
    browser.refresh();
    // 元本表示を評価
    expect(page.initValueInput.getAttribute("value")).toEqual(INIT_VALUE.toString());
    // 複利計算結果を評価
    expect(page.result.getText()).toEqual(RESULT);
  });

});
