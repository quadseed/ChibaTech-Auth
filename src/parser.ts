import { google } from 'googleapis'
import { FACULTIES_AND_DEPARTMENTS } from './list'
import { oAuth2Client } from './google'

export type Student = {
  type: 'student'
  email: string
  student_id: string
  student_number: number
  given_name: string | null | undefined
  family_name: string | null | undefined
  enrollment_year: number
  faculty_id: string
  faculty_name_en: string
  faculty_name_ja: string
  department_id: number
  department_name_en: string
  department_name_ja: string
}

export type Professor = {
  type: 'professor'
  email: string
  domain: string
  given_name: string | null | undefined
  family_name: string | null | undefined
}

export const getUserInfo = async (googleCallbackCode: string) => {
  const { tokens } = await oAuth2Client.getToken(googleCallbackCode)
  oAuth2Client.setCredentials(tokens)

  const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client })
  const response = await oauth2.userinfo.get()

  const user = response.data

  if (user.email?.endsWith('@s.chibakoudai.jp')) {
    const studentId = user.email.substring(1, 8)

    const enrollmentYear = Number('20' + studentId.substring(0, 3))
    const studentNumber = Number(studentId.substring(4))

    const facultyId = studentId.substring(2, 4)
    const departmentId = Number(studentId.substring(3, 5))

    const response: Student = {
      type: 'student',
      email: user.email,
      student_id: studentId,
      student_number: studentNumber,
      given_name: user.given_name,
      family_name: user.family_name,
      enrollment_year: enrollmentYear,
      faculty_id: facultyId,
      faculty_name_en: FACULTIES_AND_DEPARTMENTS[facultyId][0][0],
      faculty_name_ja: FACULTIES_AND_DEPARTMENTS[facultyId][0][1],
      department_id: departmentId,
      department_name_en: FACULTIES_AND_DEPARTMENTS[facultyId][departmentId][0],
      department_name_ja: FACULTIES_AND_DEPARTMENTS[facultyId][departmentId][1]
    }

    return response
  }

  if (user.email?.endsWith('@p.chibakoudai.jp')) {
    const response: Professor = {
      type: 'professor',
      email: user.email,
      domain: 'p.chibakodai.jp',
      given_name: user.given_name,
      family_name: user.family_name
    }

    return response
  }

  return {
    type: 'unknown'
  }
}
