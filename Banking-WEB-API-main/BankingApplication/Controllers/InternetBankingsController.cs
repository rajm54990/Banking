using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace BankingApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InternetBankingsController : ControllerBase
    {
        private readonly BankingContext _context;

        public InternetBankingsController(BankingContext context)
        {
            _context = context;
        }

        // GET: api/InternetBankings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<InternetBanking>>> GetInternetBankings()
        {
            return await _context.InternetBankings.ToListAsync();
        }

        // GET: api/InternetBankings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<InternetBanking>> GetInternetBanking(int id)
        {
            var internetBanking = await _context.InternetBankings.FindAsync(id);

            if (internetBanking == null)
            {
                return NotFound();
            }

            return internetBanking;
        }

        // PUT: api/InternetBankings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternetBanking(int id, InternetBanking internetBanking)
        {
            if (id != internetBanking.InternetBankingId)
            {
                return BadRequest();
            }

            _context.Entry(internetBanking).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternetBankingExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/InternetBankings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<InternetBanking>> PostInternetBanking(InternetBanking internetBanking)
        {
            _context.InternetBankings.Add(internetBanking);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInternetBanking", new { id = internetBanking.InternetBankingId }, internetBanking);
        }

        // DELETE: api/InternetBankings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternetBanking(int id)
        {
            var internetBanking = await _context.InternetBankings.FindAsync(id);
            if (internetBanking == null)
            {
                return NotFound();
            }

            _context.InternetBankings.Remove(internetBanking);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternetBankingExists(int id)
        {
            return _context.InternetBankings.Any(e => e.InternetBankingId == id);
        }
    }
}
