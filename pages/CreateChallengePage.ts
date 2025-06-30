import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CreateChallengePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private getChallengeCardSelector(challengeType: 'Custom' | 'Race' | 'Journey' | 'E-Marathon' | 'Streak'): string {
        const titleText = challengeType === 'E-Marathon' ? 'E-Marathon' : `${challengeType} Challenge`;
        return `//div[contains(@class, 'card-title') and normalize-space(text())='${titleText}']/ancestor::div[contains(@class, 'card-body')]`;
    }

    /**
     * Clicks the "Create Challenge" button for a specific challenge type.
     * @param challengeType - The title of the challenge to create.
     */
    async selectChallengeType(challengeType: 'Custom' | 'Race' | 'Journey' | 'E-Marathon' | 'Streak') {
        const challengeCardSelector = this.getChallengeCardSelector(challengeType);
        const createButtonSelector = `${challengeCardSelector}//button[normalize-space()='Create Challenge']`;
        
        const createButton = this.page.locator(createButtonSelector);
        await createButton.waitFor({ state: 'visible', timeout: 10000 });
        await createButton.click();
    }

    /**
     * Gets the description text for a specific challenge type.
     * @param challengeType - The title of the challenge.
     */
    async getChallengeDescription(challengeType: 'Custom' | 'Race' | 'Journey' | 'E-Marathon' | 'Streak'): Promise<string | null> {
        const challengeCardSelector = this.getChallengeCardSelector(challengeType);
        const descriptionSelector = `${challengeCardSelector}//div[contains(@class, 'card-description')]`;
        
        const descriptionElement = this.page.locator(descriptionSelector);
        await descriptionElement.waitFor({ state: 'visible', timeout: 10000 });
        return await descriptionElement.textContent();
    }
} 