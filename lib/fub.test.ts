import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  buildFollowUpBossEventBody,
  parseContactLeadBody,
  sendFollowUpBossEvent,
  FUB_SITE,
} from './fub'

describe('parseContactLeadBody', () => {
  it('rejects empty body', () => {
    const result = parseContactLeadBody({})
    assert.equal(result.ok, false)
  })

  it('accepts valid lead', () => {
    const result = parseContactLeadBody({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      formName: 'Test Form',
      inquiryType: 'Property Inquiry',
      message: 'Hello',
    })
    assert.equal(result.ok, true)
  })
})

describe('buildFollowUpBossEventBody', () => {
  it('includes site tags and person', () => {
    const body = buildFollowUpBossEventBody({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      phone: '7025550100',
      message: 'Test message',
      formName: 'Century Communities Request Information',
      inquiryType: 'Property Inquiry',
      sourceUrl: 'https://skyecanyonhomeexpert.com/century-communities',
    })
    assert.equal(body.source, FUB_SITE)
    assert.equal(body.type, 'Property Inquiry')
    assert.deepEqual(body.person.tags, [FUB_SITE, 'Century Communities Request Information'])
  })
})

describe('sendFollowUpBossEvent', () => {
  it('returns missing_key without env', async () => {
    const result = await sendFollowUpBossEvent(
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        message: 'x',
        formName: 'Test',
        inquiryType: 'General Inquiry',
      },
      { apiKey: '' }
    )
    assert.equal(result.ok, false)
    assert.equal(result.reason, 'missing_key')
  })

  it('succeeds when FUB returns 201', async () => {
    const mockFetch: typeof fetch = async () =>
      new Response(null, { status: 201 })

    const result = await sendFollowUpBossEvent(
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        message: 'x',
        formName: 'Test',
        inquiryType: 'Property Inquiry',
      },
      { apiKey: 'test-key-not-real', fetchImpl: mockFetch }
    )
    assert.equal(result.ok, true)
  })
})
