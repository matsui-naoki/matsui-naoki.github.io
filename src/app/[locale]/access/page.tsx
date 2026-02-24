'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import LocaleNavigation from '@/components/LocaleNavigation'
import { useTranslations, useLocale } from 'next-intl'

export default function Access() {
  const t = useTranslations('access')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  const campusFacilities = [
    {
      icon: 'FOOD',
      title: locale === 'ja' ? '食堂・カフェ' : 'Cafeteria',
      desc: locale === 'ja' ? 'MOTOTECHレストラン（モーニング営業あり）' : 'MOTOTECH Restaurant (morning service available)'
    },
    {
      icon: 'LIB',
      title: locale === 'ja' ? '図書館' : 'Library',
      desc: locale === 'ja' ? '学術図書館、自習スペース' : 'Academic library, study spaces'
    },
    {
      icon: 'GYM',
      title: locale === 'ja' ? 'トレーニングルーム' : 'Training Room',
      desc: locale === 'ja' ? '学内者限定' : 'For campus members only',
      link: 'https://www.titech.ac.jp/student-support/students/facilities/sports'
    },
    {
      icon: 'BBQ',
      title: locale === 'ja' ? 'バーベキュー場' : 'BBQ Area',
      desc: locale === 'ja' ? '学内者限定' : 'For campus members only',
      link: 'https://www.szc.titech.ac.jp/somu/kakishiyou.html'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <LocaleNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('title')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Address and Contact */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
                <div className="mb-6">
                  <span className="px-3 py-1 text-xs font-mono bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20">
                    LOCATION
                  </span>
                </div>

                <h2 className="text-3xl font-black mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {t('labLocation')}
                  </span>
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center text-black text-sm font-bold">
                      LOC
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('addressLabel')}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {locale === 'ja' ? (
                          <>
                            〒226-8503<br/>
                            神奈川県横浜市緑区長津田町4259<br/>
                            東京科学大学 すずかけ台キャンパス<br/>
                            G1棟 9階 914号室
                          </>
                        ) : (
                          <>
                            G1-914, 9th floor, Building G1<br/>
                            Suzukakedai Campus, Institute of Science Tokyo<br/>
                            4259 Nagatsuta-cho, Midori-ku, Yokohama<br/>
                            Kanagawa 226-8503, Japan
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-black text-sm font-bold">
                      @
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('emailLabel')}</h3>
                      <p className="text-gray-300 font-mono">
                        matsui.n.ee49[at]m.isct.ac.jp
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center text-black text-sm font-bold">
                      TEL
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('phoneLabel')}</h3>
                      <p className="text-gray-300 font-mono">
                        045-924-5561 {locale === 'ja' ? '(研究室直通)' : '(Direct line)'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center text-black text-sm font-bold">
                      BLDG
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{t('affiliationLabel')}</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {locale === 'ja' ? (
                          <>
                            東京科学大学（Institute of Science Tokyo）<br/>
                            総合研究院 全固体電池研究センター<br/>
                            物質理工学院 応用化学系
                          </>
                        ) : (
                          <>
                            Institute of Science Tokyo<br/>
                            All-Solid-State Battery Research Center<br/>
                            Department of Chemical Science and Engineering
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800 h-full">
                <div className="mb-6">
                  <span className="px-3 py-1 text-xs font-mono bg-blue-400/10 text-blue-400 rounded-full border border-blue-400/20">
                    MAP
                  </span>
                </div>

                <h3 className="text-2xl font-black mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {t('campusMap')}
                  </span>
                </h3>

                {/* Google Maps Embedded */}
                <div className="relative w-full h-80 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.8!2d139.48352!3d35.51368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f0df6c06c7b%3A0x8f3f8b3e3c8f3b3!2z57eP5ZCI55CG5bel5a2m56CU56m26aCf77yR5Y-377yI77yh77yR5qOf77yJ!5e0!3m2!1sja!2sjp!4v1642568394917"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>

                <div className="mt-4 text-center">
                  <a
                    href="https://www.google.com/maps/place/Tokyo+Institute+of+Technology+Suzukakedai+Campus/@35.505309,139.483425,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    {t('openInMaps')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Route Map */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {locale === 'ja' ? 'キャンパス内ルート' : 'Campus Route'}
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">
              {locale === 'ja'
                ? 'すずかけ台駅からG1棟までの経路'
                : 'Route from Suzukakedai Station to Building G1'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 border border-gray-800"
          >
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src="/access_route.jpg"
                alt={locale === 'ja'
                  ? 'すずかけ台駅からG1棟へのアクセスマップ - 徒歩約8分'
                  : 'Access map from Suzukakedai Station to Building G1 - approx. 8 min walk'}
                width={1200}
                height={1200}
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              {locale === 'ja'
                ? '赤線: 徒歩ルート（すずかけ台駅→G1棟 約8分） / 青線: 自動車ルート'
                : 'Red line: Walking route (Suzukakedai Sta. → G1 Bldg. ~8 min) / Blue line: Car route'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('transportation')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">{t('transportationSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Train Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  TRAIN
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    {t('byTrain')}
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-400 mb-2">{t('nearestStation')}</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>
                        {locale === 'ja'
                          ? '東急田園都市線「すずかけ台駅」徒歩5分'
                          : 'Tokyu Den-en-toshi Line "Suzukakedai Station" 5 min walk'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span>
                        {locale === 'ja'
                          ? 'JR横浜線「長津田駅」から東急田園都市線乗り換え'
                          : 'Transfer from JR Yokohama Line "Nagatsuta Station"'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="font-bold text-blue-400 mb-2">{t('travelTime')}</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• {locale === 'ja' ? '渋谷駅から：約40分' : 'From Shibuya: ~40 min'}</li>
                    <li>• {locale === 'ja' ? '横浜駅から：約30分' : 'From Yokohama: ~30 min'}</li>
                    <li>• {locale === 'ja' ? '新横浜駅から：約25分' : 'From Shin-Yokohama: ~25 min'}</li>
                    <li>• {locale === 'ja' ? '羽田空港から：約50分' : 'From Haneda Airport: ~50 min'}</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Car Access */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                  CAR
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {t('byCar')}
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-400/20">
                  <h4 className="font-bold text-purple-400 mb-2">{t('highway')}</h4>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>
                        {locale === 'ja'
                          ? '東名高速「横浜青葉IC」から約15分'
                          : 'Tomei Expressway "Yokohama-Aoba IC" ~15 min'}
                      </span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>
                        {locale === 'ja'
                          ? '第三京浜「都筑IC」から約20分'
                          : 'Daisan-Keihin "Tsuzuki IC" ~20 min'}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-pink-400/20">
                  <h4 className="font-bold text-pink-400 mb-2">{t('parking')}</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• {locale === 'ja' ? 'キャンパス内に有料駐車場あり' : 'Paid parking available on campus'}</li>
                    <li>• {locale === 'ja' ? '事前予約不要' : 'No reservation required'}</li>
                    <li>• {locale === 'ja' ? '料金：1日100円' : 'Fee: ¥100/day'}</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('visitorInfo')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">{t('visitorInfoSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold mb-4">
                ENTRY
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">{t('entryProcedure')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {t('entryProcedureDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold mb-4">
                TIME
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-3">{t('receptionHours')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                {t('receptionHoursDesc')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold mb-4">
                APPT
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-3">{t('appointment')}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t('appointmentDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('campusFacilities')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">{t('campusFacilitiesSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campusFacilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-700 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center text-white text-xs font-bold mb-4">{facility.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{facility.desc}</p>
                {facility.link && (
                  <a
                    href={facility.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    {locale === 'ja' ? '詳細はこちら →' : 'Details →'}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Facilities */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t('nearbyFacilities')}
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-light">{t('nearbyFacilitiesSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Accommodation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                  HOTEL
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {t('accommodation')}
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-blue-400/20">
                  <h4 className="font-bold text-blue-400 mb-2">
                    {locale === 'ja' ? '東横INN南町田' : 'Toyoko Inn Minamimachida'}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    {locale === 'ja' ? 'アクセス便利なビジネスホテル' : 'Conveniently located business hotel'}
                  </p>
                  <a
                    href="https://www.toyoko-inn.com/search/detail/00358/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    {locale === 'ja' ? '公式サイト →' : 'Official Website →'}
                  </a>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-400/20">
                  <h4 className="font-bold text-purple-400 mb-2">
                    {locale === 'ja' ? '万葉の湯' : 'Manyo no Yu'}
                  </h4>
                  <p className="text-gray-300 text-sm mb-2">
                    {locale === 'ja' ? '温泉・宿泊・リラクゼーション施設' : 'Hot spring, accommodation & relaxation facility'}
                  </p>
                  <a
                    href="https://www.manyo.co.jp/machida/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-xs hover:text-cyan-300 transition-colors"
                  >
                    {locale === 'ja' ? '公式サイト →' : 'Official Website →'}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Dining */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-400 to-cyan-500 flex items-center justify-center text-white text-sm font-bold">
                  FOOD
                </div>
                <h3 className="text-2xl font-black">
                  <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                    {t('dining')}
                  </span>
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-green-400/20">
                  <h4 className="font-bold text-green-400 mb-2">
                    {locale === 'ja' ? '朝日屋' : 'Asahiya'}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {locale === 'ja' ? 'そば・うどん専門店' : 'Soba & Udon specialty restaurant'}
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4 border border-cyan-400/20">
                  <h4 className="font-bold text-cyan-400 mb-2">
                    {locale === 'ja' ? 'マラバル' : 'Malabar'}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {locale === 'ja' ? '本格カレー料理' : 'Authentic curry cuisine'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link href="/" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
          {tCommon('backToHome')}
        </Link>
      </div>
    </div>
  )
}
