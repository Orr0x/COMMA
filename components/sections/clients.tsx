const clients = [
  // Tier 1: Feature Clients
  { name: 'Loop Earplugs', emoji: '🎧', tier: 1 },
  { name: 'Huel', emoji: '🥤', tier: 1 },
  { name: 'F1 Arcade', emoji: '🏎️', tier: 1 },
  { name: 'Knight Frank', emoji: '🏢', tier: 1 },
  { name: 'Navan', emoji: '✈️', tier: 1 },
  { name: 'Sage', emoji: '💼', tier: 1 },

  // Tier 2: Major Brands
  { name: 'NHS', emoji: '🏥', tier: 2 },
  { name: 'Virgin Trains', emoji: '🚄', tier: 2 },
  { name: 'EE', emoji: '📱', tier: 2 },
  { name: 'Currys', emoji: '🔌', tier: 2 },
  { name: 'BT', emoji: '☎️', tier: 2 },
  { name: 'Pret A Manger', emoji: '🥖', tier: 2 },

  // Tier 3: Growing Brands
  { name: 'Yugen Agency', emoji: '🎨', tier: 3 },
  { name: 'Airhive', emoji: '🌿', tier: 3 },
  { name: 'Vinny', emoji: '🍝', tier: 3 },
  { name: 'Homebound', emoji: '🏡', tier: 3 },
  { name: 'Victress', emoji: '💪', tier: 3 },
  { name: 'Delamere Health', emoji: '🧘', tier: 3 },
  { name: 'Scottish Book Trust', emoji: '📚', tier: 3 },
  { name: 'Dawn Creative', emoji: '🎭', tier: 3 },
  { name: 'Oppo', emoji: '📲', tier: 3 },
  { name: 'SIXT', emoji: '🚗', tier: 3 },
  { name: 'Prezzo', emoji: '🍕', tier: 3 },
  { name: 'Grubby', emoji: '🌱', tier: 3 },
]

export function Clients() {
  return (
    <section className="py-20 bg-gray-50" id="clients">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            When £120M+ Brands Need Words That Sell
          </h2>
          <p className="text-xl text-gray-600">
            They choose copy that's clear, compelling, and conversion-focused
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:scale-105 group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {client.emoji}
              </div>
              <p className="text-sm font-semibold text-gray-700 text-center">
                {client.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg font-semibold">
            30+ brands trust COMMA Studio for copy that converts
          </p>
          <p className="text-gray-500 text-sm mt-2">
            From startups to £120M+ enterprises
          </p>
        </div>
      </div>
    </section>
  )
}
