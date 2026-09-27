'use client'

import { useState, type FormEvent } from 'react'

const FORM_NAME = 'Century Communities Request Information'
const CONTACT_PHONE = '702-222-1964'
const SUBMIT_ERROR_MESSAGE = `Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at ${CONTACT_PHONE}.`

export default function CenturyCommunitiesRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)
    setSubmitSuccess(false)
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    const firstName = String(formData.get('firstName') ?? '').trim()
    const lastName = String(formData.get('lastName') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const rentOrOwn = String(formData.get('rentOrOwn') ?? '').trim()
    const scheduleTour = formData.get('scheduleTour') === 'on'
    const tourPreferences = String(formData.get('tourPreferences') ?? '').trim()

    const messageParts = [
      'Century Communities at Skye Canyon — information request.',
      rentOrOwn ? `Currently: ${rentOrOwn === 'rent' ? 'Rent' : rentOrOwn === 'own' ? 'Own' : rentOrOwn}` : null,
      scheduleTour ? 'Requested: Schedule a tour' : null,
      tourPreferences ? `Tour preferences: ${tourPreferences}` : null,
    ].filter(Boolean)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          formName: FORM_NAME,
          inquiryType: 'Property Inquiry',
          message: messageParts.join('\n'),
          sourceUrl: typeof window !== 'undefined' ? window.location.href : undefined,
        }),
      })

      if (!response.ok) {
        setSubmitError(SUBMIT_ERROR_MESSAGE)
        return
      }

      setSubmitSuccess(true)
      form.reset()
    } catch {
      setSubmitError(SUBMIT_ERROR_MESSAGE)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate={false}>
      {submitSuccess && (
        <div
          className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
          role="status"
        >
          Thank you! Your request was sent. Dr. Jan Duffy will be in touch soon.
        </div>
      )}
      {submitError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800" role="alert">
          {submitError}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cc-first-name" className="block text-gray-700 font-semibold mb-2">
            First Name *
          </label>
          <input
            id="cc-first-name"
            name="firstName"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="cc-last-name" className="block text-gray-700 font-semibold mb-2">
            Last Name *
          </label>
          <input
            id="cc-last-name"
            name="lastName"
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="cc-phone" className="block text-gray-700 font-semibold mb-2">
            Phone Number *
          </label>
          <input
            id="cc-phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="cc-email" className="block text-gray-700 font-semibold mb-2">
            Email *
          </label>
          <input
            id="cc-email"
            name="email"
            type="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cc-rent-own" className="block text-gray-700 font-semibold mb-2">
          Do You Currently Rent or Own?
        </label>
        <select
          id="cc-rent-own"
          name="rentOrOwn"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isSubmitting}
        >
          <option value="">Select...</option>
          <option value="rent">Rent</option>
          <option value="own">Own</option>
        </select>
      </div>

      <div>
        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            name="scheduleTour"
            className="mr-3 h-5 w-5"
            disabled={isSubmitting}
          />
          <span>Schedule a Tour</span>
        </label>
      </div>

      <div>
        <label htmlFor="cc-tour-prefs" className="block text-gray-700 font-semibold mb-2">
          Tour Preferences
        </label>
        <textarea
          id="cc-tour-prefs"
          name="tourPreferences"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors text-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending…' : 'Submit Request'}
      </button>

      <p className="text-xs text-gray-600 text-center">
        By submitting this form, you agree to be contacted by Century Communities. Standard message
        rates apply. You can opt out at any time.
      </p>
    </form>
  )
}
