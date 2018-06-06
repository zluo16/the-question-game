require "application_system_test_case"

class CluesTest < ApplicationSystemTestCase
  setup do
    @clue = clues(:one)
  end

  test "visiting the index" do
    visit clues_url
    assert_selector "h1", text: "Clues"
  end

  test "creating a Clue" do
    visit clues_url
    click_on "New Clue"

    fill_in "Answer", with: @clue.answer
    fill_in "Phrase", with: @clue.phrase
    fill_in "Value", with: @clue.value
    click_on "Create Clue"

    assert_text "Clue was successfully created"
    click_on "Back"
  end

  test "updating a Clue" do
    visit clues_url
    click_on "Edit", match: :first

    fill_in "Answer", with: @clue.answer
    fill_in "Phrase", with: @clue.phrase
    fill_in "Value", with: @clue.value
    click_on "Update Clue"

    assert_text "Clue was successfully updated"
    click_on "Back"
  end

  test "destroying a Clue" do
    visit clues_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Clue was successfully destroyed"
  end
end
