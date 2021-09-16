/**
 * @jest-environment jsdom
 */

import { describe, expect } from '@jest/globals';
import { modal1, modal2, modal3 } from './statusMockUp';
import Modal from '../modules/status';

describe('Comment Counter Testing', () => {
  test('Counting number of comments when there is "No comments Yet" message being displayed === Comments(0)', () => {
    document.body.innerHTML = modal1;
    Modal.updateCommentsCounter();

    const title = document.getElementById('modal-comments-title').innerText;
    expect(title).toBe('Comments(0)');
  });
  test('Counting number of comments when there is 2 comments === Comments(2)', () => {
    document.body.innerHTML = modal2;
    Modal.updateCommentsCounter();

    const title = document.getElementById('modal-comments-title').innerText;
    expect(title).toBe('Comments(2)');
  });
  test('Counting number of comments when there is 4 comments === Comments(4)', () => {
    document.body.innerHTML = modal3;
    Modal.updateCommentsCounter();

    const title = document.getElementById('modal-comments-title').innerText;
    expect(title).toBe('Comments(4)');
  });
});