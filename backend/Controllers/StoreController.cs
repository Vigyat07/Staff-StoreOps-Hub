using BelcStaffStoreOpsHub.Api.Data;
using BelcStaffStoreOpsHub.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BelcStaffStoreOpsHub.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoreController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StoreController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Store>>> GetStores()
        {
            return await _context.Stores.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Store>> GetStore(int id)
        {
            var store = await _context.Stores.FindAsync(id);
            if (store == null) return NotFound();

            return store;
        }

        [HttpPost]
        public async Task<ActionResult<Store>> CreateStore(Store store)
        {
            _context.Stores.Add(store);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetStore), new { id = store.Id }, store);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStore(int id, Store store)
        {
            if (id != store.Id) return BadRequest();

            _context.Entry(store).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStore(int id)
        {
            var store = await _context.Stores.FindAsync(id);
            if (store == null) return NotFound();

            _context.Stores.Remove(store);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
