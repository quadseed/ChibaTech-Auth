type FacultiesAndDepartments = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export const FACULTIES_AND_DEPARTMENTS: FacultiesAndDepartments = {
  a: [
    // Faculty Name
    ['Faculty of Engineering', '工学部'],
    // Department Name
    ['Department of Mechanical Engineering', '機械工学科'],
    ['Department of Innovative Mechanical and Electronic Engineering', '機械電子創成工学科'],
    ['Department of Advanced Materials Science and Engineering', '先端材料工学科'],
    ['Department of Electrical and Electronic Engineering', '電気電子工学科'],
    ['Department of Information and Communication Systems Engineering', '情報通信システム工学科'],
    ['Department of Applied Chemistry', '応用化学科']
  ],
  b: [
    // Faculty Name
    ['Faculty of Creative Engineering', '創造工学部'],
    // Department Name
    ['Department of Architecture', '建築学科'],
    ['Department of Civil and Environmental Engineering', '都市環境工学科'],
    ['Department of Design', 'デザイン科学科']
  ],
  c: [
    // Faculty Name
    ['Faculty of Advanced Engineering', '先進工学部'],
    // Department Name
    ['Department of Advanced Robotics', '未来ロボティクス学科'],
    ['Department of Life Science', '生命科学科'],
    ['Department of Advanced Media', '知能メディア工学科']
  ],
  '3': [
    // Faculty Name
    ['Faculty of Information and Computer Science', '情報科学部'],
    // Department Name
    ['Department of Computer Science', '情報工学科'],
    ['Department of Information and Network Science', '情報ネットワーク学科']
  ],
  '4': [
    // Faculty Name
    ['Faculty of Social Systems Science', '社会システム科学部'],
    // Department Name
    ['Department of Management Information Science', '経営情報科学科'],
    ['Department of Project Management', 'プロジェクトマネジメント学科'],
    ['Department of Risk Science in Finance and Management', '金融・経営リスク科学科']
  ]
} as const
